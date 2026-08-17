import { Component, inject, signal, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// 引入新的介面
import { WeatherApiResponse, WeatherDisplayData } from './weather.interfaces';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent implements OnInit {
  private http = inject(HttpClient);

  // 改變 signal 的型別為 WeatherDisplayData[]
  weatherData = signal<WeatherDisplayData[]>([]);

  private apiUrl = 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-58469623-B2D4-4A61-87AF-9B5256D5D34F';

  ngOnInit() {
    this.http.get<WeatherApiResponse>(this.apiUrl).subscribe({
      next: (res) => {
        const locations = res?.records?.location || [];

        const mapped: WeatherDisplayData[] = locations.map((loc) => {
          const elements = loc.weatherElement || [];

          // 找最高溫 (MaxT)
          const maxTempElem = elements.find((e) => e.elementName === 'MaxT');
          let temp = '--';
          if (maxTempElem?.time?.[0]?.parameter?.parameterName) {
            temp = maxTempElem.time[0].parameter.parameterName;
          }

          // 找天氣現象 (Wx)
          const wxElem = elements.find((e) => e.elementName === 'Wx');
          let weather = '觀測中';
          if (wxElem?.time?.[0]?.parameter?.parameterName) {
            weather = wxElem.time[0].parameter.parameterName;
          }

          // 找降雨機率 (PoP)
          const popElem = elements.find((e) => e.elementName === 'PoP');
          let pop = '0';
          if (popElem?.time?.[0]?.parameter?.parameterName) {
            pop = popElem.time[0].parameter.parameterName;
          }

          // 回傳符合 WeatherDisplayData 介面的物件
          return {
            locationName: loc.locationName,
            temp: temp,
            weather: weather,
            humidity: pop
          } as WeatherDisplayData; // 明確指定型別
        });

        this.weatherData.set(mapped);
      },
      error: (err) => {
        console.error('API抓取失敗', err);
        this.weatherData.set([
          {
            locationName: '資料載入失敗',
            temp: '--',
            weather: '請檢查 API',
            humidity: '--'
          }
        ]);
      }
    });
  }
}
