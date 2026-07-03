import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private cookieService: CookieService) {
  const theme = this.cookieService.get('theme');
  console.log('theme:', theme);

  const user = { name: 'Allen', level: 5 };
    localStorage.setItem('user', JSON.stringify(user));

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log('name:', parsedUser.name);
      console.log('level:', parsedUser.level);
    }
  }

}
