import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';
  error = false;

  constructor(private router: Router){}

  login(){
    if(this.password === '1234'){
      this.router.navigate(['/dashboard'],{
        queryParams: {name: this.username}
      });
    }else{
      this.error = true;
    }
  }
}
