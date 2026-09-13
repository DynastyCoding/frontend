import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mat-lab',
  imports: [MatTabsModule, RouterOutlet, RouterLink],
  templateUrl: './mat-lab.component.html',
  styleUrl: './mat-lab.component.scss'
})
export class MatLabComponent {
  links = [
  { path: '/test',  name: 'TEST'  },
  { path: '/test2', name: 'TEST2' },
  { path: '/test3', name: 'TEST3' }
];

activeLink = this.links[0].name;

}
