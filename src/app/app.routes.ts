import { Routes } from '@angular/router';
import { BtcTrackerComponent } from './project/btc-tracker/btc-tracker.component';
import { AngularmaterialComponent } from './ch32/angularmaterial/angularmaterial.component';
import { NgclassComponent } from './ch32/ngclass/ngclass.component';
import { MatLabComponent } from './ch32/mat-lab/mat-lab.component';
import { EmployeeListComponent } from './project/employee-list/employee-list.component';


export const routes: Routes = [

  {path: '', redirectTo:'/angularmaterial', pathMatch: 'full'},
  {path: 'btc-tracker', component: BtcTrackerComponent},
  {path: 'angularmaterial', component:AngularmaterialComponent},
  {path: 'ngclass', component:NgclassComponent},
  {path: 'mat-lab', component:MatLabComponent},
  {path: 'employee-list', component:EmployeeListComponent}
];
