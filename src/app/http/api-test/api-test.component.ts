import { HttpClientService } from '../../core/services/http.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-api-test',
  imports: [],
  templateUrl: './api-test.component.html',
})
export class ApiTestComponent {
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


