import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {
  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.email = this.authService.getEmail();
  }

  confirmCode(form) {
    this.authService.confirmRegister(this.email, form.value.code);
  }
}
