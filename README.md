# Frontend Practice

個人前端練習專案，使用 Angular 19 建立，涵蓋路由、表單、HTTP、Material、資料傳遞等主題。

## 技術棧

- Angular 19
- TypeScript
- Angular Material
- RxJS
- SCSS

## 專案結構

```text
src/app/
├── core/                  # 全站只載入一次
│   ├── interceptors/      # HTTP 攔截器
│   └── services/          # 共用服務
├── routing/               # 路由練習
├── binding/               # 資料繫結
├── data-passing/          # 元件間資料傳遞（@Input / @Output、路由狀態）
├── http/                  # HTTP 與 Cookie 練習
├── angular-material/      # Angular Material 元件練習
├── syntax/                # 前端語法練習
└── project/               # 完整功能的小專案
    ├── btc-tracker/
    ├── employee-list/
    ├── resume/
    ├── shop/
    └── weather/
```
