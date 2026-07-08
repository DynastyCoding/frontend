import { CartService } from './../../../@services/CartService';
import { Component } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  cartCount = 0;

  constructor(private CartService: CartService){}

  ngOnInit(): void{
    this.CartService._cartCount$.subscribe((count)=>{
      this.cartCount = count;
    })
  }

}
