import { LoadingService } from './core/services/loading.service';
import { Observable } from 'rxjs';

// Angular 核心
import { Component, OnInit, AfterViewInit, inject, NgModule, Signal } from '@angular/core';

// Angular 路由 (導航)
import { Router, RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

// Angular Material UI (畫面與互動)
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// 控制流語法與管線
import { CommonModule } from '@angular/common';

// 瀏覽器基礎環境
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 自己寫的 Standalone 獨立元件
import { DialogComponent } from './angular-material/dialog/dialog.component';
import { HeaderComponent } from "./angular-material/subscribe/header/header.component";
import { ProductListComponent } from "./angular-material/subscribe/product-list/product-list.component";
import { SidenavmenuComponent } from './angular-material/sidenavmenu/sidenavmenu.component';

//動態欄位
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',//元件的標籤名稱，在 HTML 中以此名稱使用
  standalone: true,
  imports: [MatButtonModule,
            RouterOutlet,
            HeaderComponent,
            MatProgressSpinnerModule,
            CommonModule,
            SidenavmenuComponent,
            ReactiveFormsModule
          ],
  templateUrl: './app.component.html',//指定此元件使用的 HTML 檔案路徑
  styleUrl: './app.component.scss'//指定此元件使用的 SCSS 檔案路徑
})
export class AppComponent implements OnInit{
  welcomeMessage! : string;

  constructor(private router: Router
             ,private LoadingService: LoadingService){}

  goToFirst(){
    this.router.navigate(['/first']);
  }

  goToSecond(){
    this.router.navigate(['/second']);
  }

  readonly dialog = inject(MatDialog);

  showDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { name: '姓名', animal: '請輸入資料' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('使用者輸入：', result);
    });
  }

  //loading$!: Observable<boolean>
  loading!: Signal<boolean>;

  ngOnInit(): void{
    //this.loading$ = this.LoadingService.loading$;
    this.loading = this.LoadingService.loading;
  }

  fb = inject (FormBuilder);

  form = this.fb.group({
    surveyTitle: ['', Validators.required],

    questions: this.fb.array([])
  });

}
