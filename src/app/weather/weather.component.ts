import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})

export class WeatherComponent implements OnInit {
  private http = inject(HttpClient); // 注入 HttpClient

  // 用來存放 API 回傳的資料
  weatherData = signal<any[]>([]);

  // API 網址 (題目給的)
  private apiUrl = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-69B5A9F7-1D8D-495E-A1F2-C160E39B4D44&limit=10&format=JSON';

  ngOnInit(){
    // 1. 使用題目要求的 getApi 方式呼叫 (若沒另寫 service，可用 this.http.get)
    this.http.get(this.apiUrl).subscribe({
      next: (res: any) => {/*處理你拿回來的資料*/},
      error: (err) => {console.error('API抓取失敗', err);}
    });
  }
}
