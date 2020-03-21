import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateProfileService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  perfop = {
    headers: this.headers
  };
  add_candidate_profile_url = 'http://localhost:3002/api/addprofile'; 
  
  constructor(public http: HttpClient) { 
  }

  public save_candidate_profile(data:any)
  {
    return this.http.post(this.add_candidate_profile_url, data, this.perfop);
  }
}
