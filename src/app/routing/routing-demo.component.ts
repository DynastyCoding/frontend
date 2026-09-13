import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-routing-demo',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './routing-demo.component.html',
  styleUrl: './routing-demo.component.scss',
})
export class RoutingDemoComponent {}
