import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './ch32/dialog/dialog.component';
import { HeaderComponent } from "./ch32/subscribe/header/header.component";
import { ProductListComponent } from "./ch32/subscribe/product-list/product-list.component";
@Component({
  selector: 'app-root',//元件的標籤名稱，在 HTML 中以此名稱使用
  standalone: true,
  imports: [ MatButtonModule, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',//指定此元件使用的 HTML 檔案路徑
  styleUrl: './app.component.scss'//指定此元件使用的 SCSS 檔案路徑
})
export class AppComponent {
  welcomeMessage! : string;

  constructor(private router: Router){}

  goToFirst(){
    this.router.navigate(['/first']);
  }

  goToSecond(){
    this.router.navigate(['/second']);
  }

  readonly dialog = inject(MatDialog);

  showDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { name: '姓名', animal: '請輸入資料' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('使用者輸入：', result);
    });
  }
}
