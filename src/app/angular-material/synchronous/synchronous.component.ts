import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User{
  id: string;
  name: {first: string; last: string};
  email: string;
}

interface RandomUsersResponse{
  data:{
    data: User[];
  }
}

@Component({
  selector: 'app-synchronous',
  imports: [],
  templateUrl: './synchronous.component.html',
  styleUrl: './synchronous.component.scss'
})
export class SynchronousComponent implements OnInit{

  private readonly http = inject(HttpClient);

  loading = false;
  errorMessage = '';
  users: User[] = [];

  ngOnInit(): void{
    this.loading = true;

    this.http
    .get<RandomUsersResponse>('https://api.freeapi.app/api/v1/public/randomusers')
    .subscribe({
      next: (res) =>{
        this.users = res.data.data;
        this.loading = false;
      },
      error: (err)=> {
        this.errorMessage = '會員資料載入失敗，請稍後再試。'
        this.loading = false;
      }
    })
  }

}
