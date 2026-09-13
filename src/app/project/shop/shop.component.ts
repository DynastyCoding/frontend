import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {
  ad = {
  imageUrl: '/images/products/ad.png',
  title: '辦公周邊'
};

categoryMenu = ['辦公配件', '印表機', '鍵盤滑鼠', '喇叭耳麥'];

products = [
  { name: 'iFLYTEK AINOTE Air 2 AI智能會議筆記', price: 16840, imageUrl: '/images/products/product-1.png' },
  { name: 'BELKIN USB-C 7合1高速多媒體集線器',   price: 1130,  imageUrl: '/images/products/product-2.png' },
  { name: 'TDGB 17-49吋 高承重 20KG 無重力 電',  price: 2391,  imageUrl: '/images/products/product-3.png' },
  { name: 'Raymii瑞米 LS-98-M1 氣壓式 螢幕支架', price: 999,   imageUrl: '/images/products/product-4.png' },
  { name: 'BELKIN Thunderbolt 4 5合1 dock 擴',   price: 5752,  imageUrl: '/images/products/product-5.png' },
];

}
