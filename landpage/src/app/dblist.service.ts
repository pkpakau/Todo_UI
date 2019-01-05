import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DblistService {

  constructor(private http: HttpClient) { }

  getlist(){
    return this.http.get('https://reqres.in/api/users');
  }
}
