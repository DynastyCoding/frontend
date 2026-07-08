import { Routes } from '@angular/router';
import { BtcTrackerComponent } from './project/btc-tracker/btc-tracker.component';
import { AngularmaterialComponent } from './ch32/angularmaterial/angularmaterial.component';
import { NgclassComponent } from './ch32/ngclass/ngclass.component';
import { MatLabComponent } from './ch32/mat-lab/mat-lab.component';
import { EmployeeListComponent } from './project/employee-list/employee-list.component';
import { DialogComponent } from './ch32/dialog/dialog.component';
import { SynchronousComponent } from './ch32/synchronous/synchronous.component';
import { HeaderComponent } from './ch32/subscribe/header/header.component';
import { ProductListComponent } from './ch32/subscribe/product-list/product-list.component';


export const routes: Routes = [

  {path: '', redirectTo:'/angularmaterial', pathMatch: 'full'},
  {path: 'btc-tracker', component: BtcTrackerComponent},
  {path: 'angularmaterial', component:AngularmaterialComponent},
  {path: 'ngclass', component:NgclassComponent},
  {path: 'mat-lab', component:MatLabComponent},
  {path: 'employee-list', component:EmployeeListComponent},
  {path: 'dialog', component:DialogComponent},
  {path: 'synchronous', component: SynchronousComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'productlist', component: ProductListComponent}
];
