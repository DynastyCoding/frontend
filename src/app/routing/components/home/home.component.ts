import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
