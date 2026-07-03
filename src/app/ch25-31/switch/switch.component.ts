import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch',
  imports: [FormsModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {

  statusCode = 404;
  checkStatus(){
  switch(Math.floor(this.statusCode / 100)) {
    case(2):
    console.log('請求成功');
    break;
    case(4):
    console.log('客戶端錯誤');
    break;
    case(5):
    console.log('伺服器錯誤');
    break;
    default:
      console.log('未知狀態');
  }
  }

  role: string = 'admin';

}
