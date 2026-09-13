import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  imports: [],
  templateUrl: './array.component.html',
})
export class ArrayComponent {

  p1(){
  let arr = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];

  for(let i =0; i < arr.length; i++){
    if(arr[i]===9){
      console.log(i);
      }
    }
  }

  cities = ['台北', '台中', '高雄', '台南', '桃園'];

  userArray=[

    {
      userName: 'playerA', props:[{propsName: '蘑菇',propsAmount:5},{propsName: '金幣',propsAmount:15}]
    },
    {
       userName: 'playerB', props:[{propsName: '龜殼',propsAmount:1},{propsName: '砲彈',propsAmount:15}]
    }
  ]
}
