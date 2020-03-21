import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoadTestService {

  constructor(public http: HttpClient) { }

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };
  getQuestionsUrl = 'http://localhost:3002/api/getquestions'; 

  public getQuestionsSet(data:any)
  {
    return this.http.get(this.getQuestionsUrl, data);
  }
}
