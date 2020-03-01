import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  forgotPasswordRequest(form) {
    this.authService.forgotPasswordRequest(form.value.email);
  }
}
