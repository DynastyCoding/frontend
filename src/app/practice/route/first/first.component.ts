import { Component } from '@angular/core';
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: 'app-first',
  imports: [RouterModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss'
})
export class FirstComponent {

  constructor(private router: Router){}

  goToChilda(){
    this.router.navigate(['/first/child-a'])
  }

}
