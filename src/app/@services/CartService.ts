import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount: number = 0;
  private cartCount$ = new BehaviorSubject<number>(0);

  _cartCount$ = this.cartCount$.asObservable();

  addItem(): void{
    this.cartCount$.next(this.cartCount$.value + 1);
  }

  clear(): void{
    this.cartCount$.next(0);
  }

}
