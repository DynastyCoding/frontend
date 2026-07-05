import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',//元件的標籤名稱，在 HTML 中以此名稱使用
  standalone: true,
  imports: [RouterOutlet,RouterLink],
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

}
