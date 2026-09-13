import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-drink-order',
  imports: [FormsModule, MatRadioModule, MatCheckboxModule],
  templateUrl: './drink-order.component.html',
  styleUrl: './drink-order.component.scss'
})
export class DrinkOrderComponent {
  sweetnessOptions = [
    { value: 'less', label: '少糖' },
    { value: 'normal', label: '正常糖' },
    { value: 'no-sugar', label: '無糖' },
  ];
  selectedSweetness = 'normal';

  toppings = [
    { label: '珍珠', checked: false },
    { label: '椰果', checked: false },
    { label: '布丁', checked: false },
  ];

  get selectedToppingsText(): string {
    const picked = this.toppings.filter(t => t.checked).map(t => t.label);
    return picked.length ? picked.join('、') : '無';
  }
}
