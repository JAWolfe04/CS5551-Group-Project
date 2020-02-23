import { Component } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-exercise',
  templateUrl: 'exercise.page.html',
  styleUrls: ['exercise.page.scss']
})
export class ExercisePage {

  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
  }
}
