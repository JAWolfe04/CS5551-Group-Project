import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-submitforgotpassword',
  templateUrl: './submitforgotpassword.page.html',
  styleUrls: ['./submitforgotpassword.page.scss'],
})
export class SubmitforgotpasswordPage implements OnInit {
  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.email = this.authService.getEmail();
  }

  submitPassword(form) {
    this.authService.forgotPasswordSubmit(this.email, form.value.code, form.value.password);
  }
}
