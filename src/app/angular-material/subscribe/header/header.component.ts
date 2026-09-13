import { Component, inject, OnInit } from '@angular/core';
// 1. 你的. 您的文件位於 ch32 內，必須向上返回到 app，然後進入 services
import { CartService } from '../../../core/services/cart.service';

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
