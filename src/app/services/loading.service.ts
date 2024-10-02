import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingObj:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingObj.asObservable();

  constructor() { }

  setLoader(loaderFlag:boolean){
    this.loadingObj.next(loaderFlag);
  }

}
