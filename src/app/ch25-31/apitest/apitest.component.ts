import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientService } from '../../../services/http.service';

@Component({
  selector: 'app-apitest',
  imports: [],
  templateUrl: './apitest.component.html',
})
export class ApitestComponent {
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {

  let postData = {
    userName: 'Allen',
    userAge: 18
  }

  this.httpClientService
    .postApi('https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post', postData)
    .subscribe((res: any) => {
      console.log(res);
    })
}
}


