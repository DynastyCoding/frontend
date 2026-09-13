import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.component.html',
  styleUrl: './typescript.component.scss'
})
export class PracticeComponent {

  hello(){
    alert('歡迎來到JS的世界');
  }

  bye(){
    alert('再見！')
  }

  score(){
    let score = 85;
    if (score >= 90) {
    console.log('A');
    } else if (score >= 80) {
    console.log('B');  // 印出 B
    } else if (score >= 70) {
    console.log('C');
    } else {
    console.log('不及格');
    }
  }

  calculate(){
  let a = '150';
  let b = '80';
  let numA = Number(a);
  let numB = Number(b);
  console.log(numA + numB);
  console.log(numA*numB);
  }

  practice(){
    let user = { name: '小明', age: 22, city: '台北' };
    let json = JSON.stringify(user);
    console.log(json);
    console.log(typeof json);
  }

  operate(){
    let price = 2000;
    price *= 0.9;
    price -= 100;
    console.log(price);
  }

  practice1(){
    for(let i = 1;i<=50;i++){
      if(i%3==2){
      console.log(i);
      }
    }
  }

  practice2(){
    let people = [
      {name: '小明', age: 20},
      {name: '小王', age: 25},
      {name: '小李', age: 30},
    ]
    people.forEach(p=>{if (p.name ==='小王')p.age=18;})
    console.log(people);

    let arr = [4, 6, 1, 2, 7, 9, 12, 15, 13];
    console.log(Math.min(...arr));

    console.log('你好我是Allen'.split('').reverse().join(''));

    let s = '我是Allen，你好';
    let start = s.indexOf('A');
    console.log(s.slice(start, start + 5));

  }

  date(){
    let date = new Date('1997-07-01 12:30:00');
    console.log(date.getFullYear());
    console.log(date.getMonth()+1);
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getHours());
  }

  combine(){
    let apiData = {account: 'allen123', score: 95, passed: true };
    let formData = {
      loginId: apiData.account,
      examScore: apiData.score,
      isPass: apiData.passed
    };
    console.log(formData);
  }

  circleArea(radius: number){
    let area = 3.14159*radius**2;
    console.log('面積: ' + area.toFixed(2));
  }

  constructor(){
  this.circleArea(5);
  this.calculateBMI(1.75, 70);
  }

  p01(){
    let money = 200;
    let spend = 50+40*3;
    console.log(money-spend);
  }

  p02(){
    let money = 5000;
    let spend =(10*50+10*40)*0.9;
    console.log(money-spend);
  }

  p03(){
    let arrayData = [
      { userName: 'Allen', payMoney: 500 },
      { userName: 'Ben',   payMoney: 20  },
      { userName: 'Eric',  payMoney: 120 }
    ];

    arrayData.forEach(item =>{
      if(item.payMoney>=200){
        console.log(item.userName + '達成VIP!');
      }
    })
  }

  calculateBMI(height: number, weight: number){

    let bmi = weight/height**2;
    if(bmi<18.5){
      console.log('BMI= ' + bmi.toFixed(2) + ' , too light.');
    }else if(bmi<25){
      console.log('BMI= ' + bmi.toFixed(2) + ' , normal.');
    }else if(bmi<30){
      console.log('BMI= ' + bmi.toFixed(2) + ' , too heave.');
    }else{
      console.log('BMI= ' + bmi.toFixed(2) + ' , overweight.');
    }
  }

}
