import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss'
})
export class TypescriptComponent {

  myName: string = 'chenyanwu';
  myAge: number= 30;
  isStudent: boolean= false;

  hello(){
    alert('歡迎來到JS的世界');
  }

  bye(){
    alert('再見！')
  }

}
