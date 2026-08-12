import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  //查
  getApi(url: string){
    return this.http.get(url);
  }

  //增
  postApi(url: string, postData: any){
    return this.http.post(url, postData);
  }

  //改
  putApi(url: string, putData: any){
    return this.http.put(url, putData);
  }

  //刪
  delApi(url: string){
    return this.http.delete(url);
  }

}
