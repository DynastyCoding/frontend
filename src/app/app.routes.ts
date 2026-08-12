import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AngularmaterialComponent } from './ch32/angularmaterial/angularmaterial.component';
import { NgclassComponent } from './ch32/ngclass/ngclass.component';
import { MatLabComponent } from './ch32/mat-lab/mat-lab.component';
import { EmployeeListComponent } from './project/employee-list/employee-list.component';
import { DialogComponent } from './ch32/dialog/dialog.component';
import { SynchronousComponent } from './ch32/synchronous/synchronous.component';
import { HeaderComponent } from './ch32/subscribe/header/header.component';
import { ProductListComponent } from './ch32/subscribe/product-list/product-list.component';
import { CartComponent } from './ch32/cart/cart.component';
import { DrinkOrderComponent } from './ch32/drink-order/drink-order.component';
import { Ch1924Component } from './ch19-22/ch19-24.component';
import { BtcTrackerComponent } from './project/btc-tracker/btc-tracker.component';
import { NotFoundComponent } from './ch23-24/routing/not-found/not-found.component';
import { PractComponent } from './practice/pract/pract.component';
import { FirstComponent } from './practice/first/first.component';
import { SecondComponent } from './practice/second/second.component';
import { ResumeComponent } from './project/resume/resume.component';
import { WeatherComponent } from './weather/weather.component';


export const routes: Routes = [
  {path: '', redirectTo:'/btc-tracker', pathMatch: 'full'},

  {path: 'angularmaterial', component:AngularmaterialComponent},
  {path: 'ngclass', component:NgclassComponent},
  {path: 'mat-lab', component:MatLabComponent},
  {path: 'employee-list', component:EmployeeListComponent},
  {path: 'dialog', component:DialogComponent},
  {path: 'synchronous', component: SynchronousComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'drink-order', component:DrinkOrderComponent},
  {path: 'app-ch19-24', component: Ch1924Component},
  {path: 'btc-tracker', component: BtcTrackerComponent},
  {path: 'pract', component:PractComponent},
  {path: 'First', component: FirstComponent },
  {path: 'Second', component: SecondComponent },
  {path: 'resume', component: ResumeComponent},
  {path: 'weather', component: WeatherComponent},

  {path: '**', component: NotFoundComponent}
];
