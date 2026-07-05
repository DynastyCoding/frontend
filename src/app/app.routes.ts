import { Routes } from '@angular/router';
import { FirstComponent } from './practice/route/first/first.component';
import { SecondComponent } from './practice/route/second/second.component';
import { ChildAComponent } from './practice/route/first/child-a/child-a.component';


export const routes: Routes = [

  {path: '', redirectTo:'/first', pathMatch: 'full'},
  {path: 'first', component: FirstComponent,
    children:[{path: 'child-a', component: ChildAComponent}]},
  {path:'second', component: SecondComponent}
];
