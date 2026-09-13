import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if',
  imports: [FormsModule],
  templateUrl: './if.component.html',
})
export class IfComponent {

  isLoggedIn = true;

  toggleLogin(){
    this.isLoggedIn = !this.isLoggedIn;
  }

  score: number = 75;

}
