import { Component } from '@angular/core';

@Component({
  selector: 'app-pract',
  imports: [],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.scss'
})
export class PracticeComponent {
    Count = 0;

    number= 1000;

    plus1(){
      this.Count++;
    }
}
