import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //private _loading$ = new BehaviorSubject<boolean>(false);
  //loading$ = this._loading$.asObservable();
  loading = signal<boolean>(false);

  /*
  show() : void {
    this._loading$.next(true);
  }

  hide(): void {
    this._loading$.next(false);
  }
  */

  show(){
    this.loading.set(true);
  }

  hide(){
    this.loading.set(false);
  }

}
