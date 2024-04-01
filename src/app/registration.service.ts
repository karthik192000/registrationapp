import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from './LoginRequest';
import { ResponseBean } from './ResponseBean';
import { UserInfo } from './UserInfo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  loginUrl:string;
  getUserInfoUrl: string;

  constructor(private http:HttpClient) {

    this.loginUrl = 'http://localhost:8080/v1/registrationservice/login'
    this.getUserInfoUrl = 'http://localhost:8080/v1/registrationservice/userinfo/'
   }


  login(loginRequest: LoginRequest){
    return this.http.post<ResponseBean>(this.loginUrl,loginRequest);
  }

  getUserInfo(email: string):Observable<UserInfo>{
    let requestUrl = this.getUserInfoUrl +  '/' +email;
    return this.http.get<UserInfo>(requestUrl);
  }
}
