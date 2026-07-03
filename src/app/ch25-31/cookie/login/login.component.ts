import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  password = '';
  error = false;

  constructor(
  private router: Router,
  private cookieService: CookieService
  ) {}

  login() {
  if (this.password === '1234') {
    this.onLoginSuccess();
  } else {
    this.error = true;
  }
  }

  onLoginSuccess() {
  this.cookieService.set('theme', 'dark', 30);
  this.router.navigate(['/dashboard']);
  }

}
