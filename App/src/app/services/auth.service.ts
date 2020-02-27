import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { ToastController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email = new BehaviorSubject<string>('');

  constructor(private router: Router,
              private toastController: ToastController) { }

  async login(email: string, password: string) {
      const user = await Auth.signIn(email, password)
          .then( data => this.router.navigateByUrl('/tabs'))
          .catch( e => {
            if (e.code === 'UserNotConfirmedException') {
              this.email.next(email);
              this.router.navigateByUrl('/confirmation');
            } else if (e.code === 'PasswordResetRequiredException') {
              this.presentToast('Password has been reset');
            } else if (e.code === 'NotAuthorizedException') {
              this.presentToast('Incorrect password');
            } else if (e.code === 'UserNotFoundException') {
              this.presentToast('Email is not registered');
            } else {
              console.log(e);
            }
          });
  }

  async register(email: string, password: string) {
      Auth.signUp(email, password).then(data => {
        this.email.next(email);
        this.router.navigateByUrl('/confirmation');
      }).catch(e => {
        if (e.code === 'UsernameExistsException') {
          this.presentToast('Account with the given email already exists');
        } else if (e.code === 'InvalidParameterException' && e.message === 'Username should be an email.') {
          this.presentToast('Email must be a valid email address');
        } else if (e.code === 'InvalidParameterException' && e.message.indexOf('password') !== -1) {
          this.presentToast('Passwords must have at least 8 characters');
        } else {
          console.log(e);
        }
      });
  }

  async confirmRegister(email: string, code: string) {
    Auth.confirmSignUp(email, code)
        .then(data => {
          this.router.navigateByUrl('/');
          this.presentToast('Email Confirmed');
        })
        .catch(e => {
          if (e.code === 'CodeMismatchException') {
            this.presentToast('Invalid verification code, please try again');
          } else {
            console.log(e);
          }
        });
  }

  getEmail() {
      return this.email.value;
  }

  hasEmail() {
      return this.email.value !== '';
  }

  isLoggedIn() {
    return Auth.currentAuthenticatedUser();
  }

  async logout() {
    Auth.signOut();
    this.router.navigateByUrl('/');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2500,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }
}
