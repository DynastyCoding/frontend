// 新增：定義轉換後要顯示的資料格式
export interface WeatherDisplayData {
  locationName: string;
  temp: string;
  weather: string;
  humidity: string;
}

// 1. 定義最內層的「參數」結構（例如溫度、天氣現象、降雨機率）
export interface WeatherParameter {
  parameterName: string;
  parameterValue?: string; // 有些資料沒有這個，所以加問號代表「可有可無」
}

// 2. 定義「時間」結構 (API 一層層包進去的)
export interface WeatherTime {
  startTime?: string;
  endTime?: string;
  parameter: WeatherParameter;
}

// 3. 定義「天氣元素」結構（例如 MaxT, Wx, PoP）
export interface WeatherElement {
  elementName: string;
  time: WeatherTime[];
}

// 4. 定義單一個「地點」的結構
export interface WeatherLocation {
  locationName: string;
  weatherElement: WeatherElement[];
}

// 5. 定義整個 API 回傳的「最外層結構」
export interface WeatherApiResponse {
  records: {
    location: WeatherLocation[];
  };
}
