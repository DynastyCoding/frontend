import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Holding {
  id: string;
  name: string;
  coin: 'BTC' | 'ETH';
  amount: number;
  cost: number;
}

@Component({
  selector: 'app-btc-tracker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './btc-tracker.component.html',
  styleUrl:'./btc-tracker.component.scss'
})
export class BtcTrackerComponent implements OnInit {
  btcPrice: number = 0;
  ethPrice: number = 0;
  //持倉列表陣列
  holdings: Holding[] = [];

  newHolding: Holding = {
    id: '',
    name: 'Binance',
    coin: 'BTC',
    amount: 0,
    cost: 0
  };

  btcTotalCost: number = 0;
  btcTotalValue: number = 0;
  btcTotalProfit: number = 0;

  ethTotalCost: number = 0;
  ethTotalValue: number = 0;
  ethTotalProfit: number = 0;

  totalCost: number = 0;
  totalValue: number = 0;
  totalProfit: number = 0;

  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadFromStorage();
    this.fetchPrices();
  }

  // 用 Binance 的 API (極度穩定)
  fetchPrices() {
    //載入狀態
    this.isLoading = true;
    // 一次抓 BTC 和 ETH 對 USDT 的價格
    this.http.get<any[]>('https://api.binance.com/api/v3/ticker/price?symbols=["BTCUSDT","ETHUSDT"]').subscribe({
      next: (data) => {
        // 從陣列中找出對應的價格
        const btcObj = data.find(item => item.symbol === 'BTCUSDT');
        const ethObj = data.find(item => item.symbol === 'ETHUSDT');
        //拿回來的是字串 要轉換成浮點數
        this.btcPrice = parseFloat(btcObj.price);
        this.ethPrice = parseFloat(ethObj.price);
        //載入狀態結束
        this.isLoading = false;
        this.errorMessage = '';
        //重新計算盈虧
        this.calculateTotal();
      },
      //API壞了或連線失敗 錯誤顯示
      error: () => {
        this.errorMessage = '無法取得價格';
        this.isLoading = false;
      }
    });
  }

  addHolding() {

    if (this.newHolding.amount <= 0 || this.newHolding.cost <= 0) {
      alert('請輸入有效的數量與成本');
      return;
    }
    if (this.holdings.length > 6) {
      alert('最多儲存 6 組持倉');
      return;
    }
    //生成隨機ID供系統辨識哪一筆資料
    this.newHolding.id = Math.random().toString(36).substring(2);
    this.holdings.push({ ...this.newHolding });

    this.saveToStorage();
    this.calculateTotal();

    this.newHolding.amount = 0;
    this.newHolding.cost = 0;
  }

  removeHolding(id: string) {
    this.holdings = this.holdings.filter(h => h.id !== id);
    this.saveToStorage();
    this.calculateTotal();
  }

   calculateTotal() {
    // 1. 先把總計歸零
    this.totalCost = 0;
    this.totalValue = 0;
    this.totalProfit = 0;

    // 2. 個別幣種歸零
    this.btcTotalCost = 0;
    this.btcTotalValue = 0;
    this.btcTotalProfit = 0;
    this.ethTotalCost = 0;
    this.ethTotalValue = 0;
    this.ethTotalProfit = 0;

    // 3. 開始一個一個算
    for (let h of this.holdings) {
      //判斷幣種
      const currentPrice = h.coin === 'BTC' ? this.btcPrice : this.ethPrice;
      const value = h.amount * currentPrice;
      const cost = h.amount * h.cost;
      const profit = value - cost;

      // 加到總計
      this.totalCost += cost;
      this.totalValue += value;
      this.totalProfit += profit;

      // 加到個別幣種
      if (h.coin === 'BTC') {
        this.btcTotalCost += cost;
        this.btcTotalValue += value;
        this.btcTotalProfit += profit;
      } else if (h.coin === 'ETH') {
        this.ethTotalCost += cost;
        this.ethTotalValue += value;
        this.ethTotalProfit += profit;
      }
    }
  }

  loadFromStorage() {
    const saved = localStorage.getItem('my_holdings');
    if (saved) this.holdings = JSON.parse(saved);
  }

  saveToStorage() {
    //JSON.stringify(this.holdings)->陣列轉字串
    localStorage.setItem('my_holdings', JSON.stringify(this.holdings));
  }
}
