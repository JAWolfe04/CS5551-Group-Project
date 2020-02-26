import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.page.html',
  styleUrls: ['./confirmation.page.scss'],
})
export class ConfirmationPage implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  confirmCode(form) {
    this.authService.confirmRegister(form.value.code);
  }
}
