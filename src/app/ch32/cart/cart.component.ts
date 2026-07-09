import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  quantity = signal<number>(1);
  price = 100;

  subtotal = computed(() => this.quantity()*this.price);

  constructor(){
    effect(() => {
      if(this.subtotal()>500){
        console.warn(`小計 ${this.subtotal()} 元，已符合優惠門檻`);
      }
    });
  }

  increase(): void {
    this.quantity.update(v => v + 1);
  }

  decrease(): void{
    this.quantity.update(v =>(v>1 ? v-1:v));
  }

}
