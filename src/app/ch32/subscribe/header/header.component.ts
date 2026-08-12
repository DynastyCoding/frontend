import { Component, inject, OnInit } from '@angular/core';
// 1. 你的檔案在 ch32 裡面，必須往上退到 app，再進 @services
import { CartService } from '../../../@services/cart-service.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  cartCount = 0;

  // 2. 使用 Angular 19 標準的 inject 寫法
  private cartService = inject(CartService);

  ngOnInit(): void {
    // 3. 加上型別 :number 解決紅字
    this.cartService._cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }
}
