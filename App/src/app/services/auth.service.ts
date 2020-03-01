import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Auth } from 'aws-amplify';
import { ToastController  } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email = new BehaviorSubject<string>('');
  private userId = new BehaviorSubject<string>('');

  constructor(private router: Router,
              private toastController: ToastController) { }

  login(email: string, password: string) {
     const promise = new Promise((resolve) => {
         Auth.signIn(email, password)
             .then(data => {
                 resolve();
                 this.userId.next(data.getUsername());
                 this.router.navigateByUrl('/tabs');
             })
             .catch(e => {
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
                 resolve();
             });
     });
     return promise;
  }

  async register(email: string, password: string) {
      return Auth.signUp(email, password).then(data => {
        this.email.next(email);
        this.router.navigateByUrl('/confirmation');
        this.userId.next(data.userSub);
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

  confirmRegister(email: string, code: string) {
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

  resendCode(email: string) {
    Auth.resendSignUp(email).then(() => {
      this.presentToast('Code resent successfully');
    }).catch(e => {
      console.log(e);
    });
  }

  forgotPasswordRequest(email: string) {
    Auth.forgotPassword(email)
        .then(data => {
          this.email.next(email);
          this.router.navigateByUrl('/submitforgotpassword');
        })
        .catch(e => {
            if (e.code === 'UserNotFoundException') {
                this.presentToast('Email is not registered');
            } else {
                console.log(e);
            }
        });
  }

  forgotPasswordSubmit(email: string, code: string, password: string) {
    Auth.forgotPasswordSubmit(email, code, password)
        .then(data => {
          this.presentToast('Password reset');
          this.router.navigateByUrl('/');
        })
        .catch(e => {
            if (e.code === 'CodeMismatchException') {
                this.presentToast('Invalid verification code, please try again');
            } else if (e.code === 'InvalidParameterException' && e.message.indexOf('password') !== -1) {
                this.presentToast('Passwords must have at least 8 characters');
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

  getUser(): string {
    Auth.currentAuthenticatedUser()
        .then(user => { this.userId.next(user.getUsername()); })
        .catch(err => { console.log(err); });

    return this.userId.value;
  }

  logout() {
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
