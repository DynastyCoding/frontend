import { Component } from '@angular/core';

@Component({
  selector: 'app-pract',
  imports: [],
  templateUrl: './pract.component.html',
  styleUrl: './pract.component.scss'
})
export class PractComponent {
    Count = 0;

    number= 1000;

    plus1(){
      this.Count++;
    }
}
