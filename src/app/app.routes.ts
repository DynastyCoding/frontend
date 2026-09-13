import { Routes } from '@angular/router';

// Angular Material Components
import { AngularmaterialComponent } from './angular-material/angularmaterial/angularmaterial.component';
import { NgclassComponent } from './angular-material/ngclass/ngclass.component';
import { MatLabComponent } from './angular-material/mat-lab/mat-lab.component';
import { DrinkOrderComponent } from './angular-material/drink-order/drink-order.component';
import { SynchronousComponent } from './angular-material/synchronous/synchronous.component';
import { DialogComponent } from './angular-material/dialog/dialog.component';
import { HeaderComponent } from './angular-material/subscribe/header/header.component';
import { ProductListComponent } from './angular-material/subscribe/product-list/product-list.component';
import { CartComponent } from './angular-material/cart/cart.component';
import { RegisterFormComponent } from './angular-material/register-form/register-form.component';
import { SidenavmenuComponent } from './angular-material/sidenavmenu/sidenavmenu.component';

// Binding Components
import { BindingComponent } from './binding/1/binding.component';
import { Binding2Component } from './binding/2/binding.component';

// Data Passing Components
import { InputAComponent } from './data-passing/io-passing/input/input-a.component';
import { InputBComponent } from './data-passing/io-passing/input/input-b.component';
import { OutputAComponent } from './data-passing/io-passing/output/output-a.component';
import { OutputBComponent } from './data-passing/io-passing/output/output-b.component';
import { FirstComponent } from './data-passing/route-sharing/first/first.component';
import { SecondComponent } from './data-passing/route-sharing/second/second.component';

// HTTP Components
import { ApiTestComponent } from './http/api-test/api-test.component';
import { DashboardComponent } from './http/cookie/dashboard/dashboard.component';
import { LoginComponent } from './http/cookie/login/login.component';

// Project Components
import { EmployeeListComponent } from './project/employee-list/employee-list.component';
import { ResumeComponent } from './project/resume/resume.component';
import { ShopComponent } from './project/shop/shop.component';
import { WeatherComponent } from './project/weather/weather.component';
import { BtcTrackerComponent } from './project/btc-tracker/btc-tracker.component';

// Routing Components
import { HomeComponent } from './routing/home/home.component';
import { NewsComponent } from './routing/home/news/news.component';
import { NotfoundComponent } from './routing/notfound/notfound.component';
import { DashboardComponent as RoutingDashboardComponent } from './routing/dashboard/dashboard.component';
import { FirstComponent as RoutingFirstComponent } from './routing/components/first/first.component';
import { SecondComponent as RoutingSecondComponent } from './routing/components/second/second.component';
import { ChildAComponent } from './routing/components/first/child-a/child-a.component';
import { AboutComponent } from './routing/components/about/about.component';
import { LoginComponent as RoutingLoginComponent } from './routing/login/login.component';
import { RoutingDemoComponent } from './routing/routing-demo.component';
import { DashboardComponent as LoginDashboardComponent } from './routing/components/login/dashboard/dashboard.component';
import { LoginComponent as LoginLoginComponent } from './routing/components/login/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo:'/btc-tracker', pathMatch: 'full'},

  // Angular Material
  {path: 'angularmaterial', component: AngularmaterialComponent},
  {path: 'ngclass', component: NgclassComponent},
  {path: 'mat-lab', component: MatLabComponent},
  {path: 'drink-order', component: DrinkOrderComponent},
  {path: 'synchronous', component: SynchronousComponent},
  {path: 'dialog', component: DialogComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'productlist', component: ProductListComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register-form', component: RegisterFormComponent},
  {path: 'sidenavmenu', component: SidenavmenuComponent},

  // Binding
  {path: 'app-ch19-24', component: BindingComponent},
  {path: 'binding2', component: Binding2Component},

  // Data Passing
  {path: 'input-a', component: InputAComponent},
  {path: 'input-b', component: InputBComponent},
  {path: 'output-a', component: OutputAComponent},
  {path: 'output-b', component: OutputBComponent},
  {path: 'route-sharing-first', component: FirstComponent},
  {path: 'route-sharing-second', component: SecondComponent},

  // HTTP
  {path: 'api-test', component: ApiTestComponent},
  {path: 'cookie-dashboard', component: DashboardComponent},
  {path: 'cookie-login', component: LoginComponent},

  // Project
  {path: 'employee-list', component: EmployeeListComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'btc-tracker', component: BtcTrackerComponent},

  // Routing
  {path: 'First', component: RoutingFirstComponent},
  {path: 'Second', component: RoutingSecondComponent},
  {path: 'child-a', component: ChildAComponent},
  {path: 'login-dashboard', component: LoginDashboardComponent},
  {path: 'login-login', component: LoginLoginComponent},
  {
    path: 'routing-demo',
    component: RoutingDemoComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'home/news', component: NewsComponent },
      { path: 'login', component: RoutingLoginComponent },
      { path: 'dashboard', component: RoutingDashboardComponent },
      { path: '**', component: NotfoundComponent}
    ]
  },

  {path: '**', component: NotfoundComponent}
];
