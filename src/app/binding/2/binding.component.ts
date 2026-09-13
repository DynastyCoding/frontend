import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-binding',
  imports: [FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss'
})
export class Binding2Component {

  product = '筆記型電腦';
  price = 25000;
  qty = 3;

  picture='https://angular.io/assets/images/logos/angular/angular.png';

  changePicture(){
    if(this.picture == 'https://angular.io/assets/images/logos/angular/angular.png'){
      this.picture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUhv0kFd559xWk2tRj1cL02cmtOv331rOTP_-yKhbWw&s=10';
    }else{
      this.picture = 'https://angular.io/assets/images/logos/angular/angular.png';
    }
  }

  agree = false;
  isAgree(){
    this.agree = !this.agree;
  }

  wordcolor = 'blue';
  changeColor(){
    if(this.wordcolor=='blue'){
      this.wordcolor = 'red';
    }else{
      this.wordcolor = 'blue';
    }
  }

  vip = true;
  inputHint= '請輸入會員編號';
  isVip(){
    this.vip = !this.vip;
  }

  inputText = '';
  handleInput(event: any){
    this.inputText = event.target.value;
  }

  count = 0;
  addCount(){
    this.count++;
  }

  reCount(){
    this.count = 0;
  }

  userName = '';

  level = 1;
  get atk(){
    return this.level*3;
  }

  get def(){
    return this.level*2;
  }

  inputLevel = '';
  changeLevel(){
    this.level = Number(this.inputLevel);
  }

  levelUp(){
    this.level++;
  }

  levelDown(){
    if(this.level>1){
      this.level--;
    }
  }

  reset(){
    this.level = 1;
  }

}
