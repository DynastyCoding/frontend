import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  getApi(url: string){
    return this.http.get(url);
  }

  postApi(url: string, postData: any){
    return this.http.post(url, postData);
  }

  putApi(url: string, putData: any){
    return this.http.put(url, putData);
  }

  delApi(url: string){
    return this.http.delete(url);
  }

}
