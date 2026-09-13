import { Component, inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  token = '';

  private authService = inject(AuthService);

  constructor() {
    this.token = this.authService.token;

}
}
