import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NewsComponent } from './components/home/news/news.component';
import { LoginComponent } from './components/login/login/login.component';
import { DashboardComponent } from './components/login/dashboard/dashboard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ChildAComponent } from './components/first/child-a/child-a.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home/news',
    component: NewsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  },
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'first/child-a',
    component: ChildAComponent
  },
  { path: '**', redirectTo: '' }
];
