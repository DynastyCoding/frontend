import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';


@Component({
  selector: 'app-sidenavmenu',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './sidenavmenu.component.html',
  styleUrl: './sidenavmenu.component.scss'
})
export class SidenavmenuComponent {
  pages = [
  { path: '/btc-tracker', label: 'Crypto Tracker' },
  { path: '/angularmaterial', label: 'Angular Material' },
  { path: '/ngclass', label: 'Dynamic CSS' },
  { path: '/mat-lab', label: 'Material Lab' },
  { path: '/employee-list', label: 'Employee Management' },
  { path: '/dialog', label: 'Dialog' },
  { path: '/synchronous', label: 'Sync / Async' },
  { path: '/header', label: 'Page Header' },
  { path: '/productlist', label: 'Product List' },
  { path: '/cart', label: 'Shopping Cart' }
  ];

   logout(): void {
    console.log('使用者已登出');
   }
}
