import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // 1. 用來存放購物車目前有幾件商品 (初始值為 0)
  private cartCountSubject = new BehaviorSubject<number>(0);
  _cartCount$ = this.cartCountSubject.asObservable();

  constructor() { }

  // 2. 你剛剛報錯說找不到的「addItem」方法：每次呼叫就 +1
  addItem() {
    const currentCount = this.cartCountSubject.getValue();
    this.cartCountSubject.next(currentCount + 1);
  }

  // 3. 你剛剛報錯說找不到的「clear」方法：清除歸零
  clear() {
    this.cartCountSubject.next(0);
  }
}