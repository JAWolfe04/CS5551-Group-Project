import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService, private dataService: DataService) { }

  ngOnInit() {
  }

  register(form) {
    this.authService.register(form.value.email, form.value.password).then(data => {
      const user = {
        id: this.authService.getUser(),
        email: form.value.email,
        dob: form.value.dob,
        weight: form.value.weight,
        height: form.value.height,
        gender: form.value.gender,
        allergy: form.value.allergy} as User;

      this.dataService.registerUser(user).subscribe(
          async error => { console.log('error'); });
    });
  }
}
