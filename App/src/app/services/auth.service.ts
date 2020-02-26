import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private email = new BehaviorSubject('');

  constructor(private router: Router, private storage: Storage) { }

  async login(email: string, password: string) {
    try {
      const user = await Auth.signIn(email, password);
      this.router.navigateByUrl('/tabs');
    } catch (e) {
      if (e.code === 'UserNotConfirmedException') {
        console.log('User is not confirmed.');
      } else if (e.code === 'PasswordResetRequiredException') {
        console.log('Password has been reset.');
      } else if (e.code === 'NotAuthorizedException') {
        console.log('Incorrect password');
      } else if (e.code === 'UserNotFoundException') {
        console.log('This email is not registered.');
      }
    }
  }

  async register(email: string, password: string) {
    Auth.signUp(email, password)
        .then(data => {
          console.log(data);
          this.email.next(email);
          this.router.navigateByUrl('/confirmation');
        })
        .catch(err => console.log(err));
  }

  async confirmRegister(code: string) {
    Auth.confirmSignUp(this.email.value, code)
        .then(data => {
          console.log(data);
          this.router.navigateByUrl('/');
        })
        .catch(err => console.log(err));
  }

  isLoggedIn() {
    return Auth.currentAuthenticatedUser();
  }

  async logout() {
    Auth.signOut();
    this.router.navigateByUrl('/');
  }
}
