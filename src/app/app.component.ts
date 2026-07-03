import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',//元件的標籤名稱，在 HTML 中以此名稱使用
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',//指定此元件使用的 HTML 檔案路徑
  styleUrl: './app.component.scss'//指定此元件使用的 SCSS 檔案路徑
})
export class AppComponent implements OnInit, AfterViewInit{
  welcomeMessage! : string;

  constructor(){
    console.log('1. constructor 執行');
  }

  ngOnInit() {
    console.log('2. ngOnInit 執行');
    this.welcomeMessage = '歡迎來到 Angular！';
  }

  ngAfterViewInit() {
    console.log('3. ngAfterViewInit 執行');
  }
}
