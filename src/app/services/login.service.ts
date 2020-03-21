import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor() {
   // const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
   }

   public login(data)
   {
    /*  return this.http.post(this.LoginDataUrl, data); */
   }

}

