import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.page.html',
  styleUrls: ['summary.page.scss']
})
export class SummaryPage {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
