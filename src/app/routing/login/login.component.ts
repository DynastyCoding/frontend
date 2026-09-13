import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
 password = '';
 error = false;

 constructor(private router: Router){}

  login(){
    if(this.password==='1234'){
      this.router.navigate(['/routing-demo/dashboard']);
    }else{
      this.error = true;
    }
  }

}
