import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  constructor(private cartService: CartService){}
  addToCart(): void{
    this.cartService.addItem();
  }

  clearCart(): void{
    this.cartService.clear();
  }
}
