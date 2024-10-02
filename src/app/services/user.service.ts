import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUserURL = "https://interceptortesting.free.beeceptor.com/my/api/path"
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.getUserURL);
  }

}
