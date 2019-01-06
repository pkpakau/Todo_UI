import { AuthData,loginData } from './auth-data.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private token:string;
  private authStatusListener=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  getToken(){
    return this.token;
  }
  
  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  createUser(fullname:string, email: string, password: string, phone:Int32Array) {
    const authData: AuthData = { fullname:fullname, email: email, password: password, phone:phone };
    this.http
      .post("http://localhost:3001/login", authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
    const loginData: loginData = { email: email, password: password };
    this.http
      .post<{ token: string}>(
        "http://localhost:3001/login",
        loginData
      )
      .subscribe(response => {
        const token = response.token;
        this.token = token;
        this.authStatusListener.next(true);

        /*      
        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log(expirationDate);
          this.saveAuthData(token, expirationDate);
          this.router.navigate(["/"]);
      }*/
      });
  }



}
