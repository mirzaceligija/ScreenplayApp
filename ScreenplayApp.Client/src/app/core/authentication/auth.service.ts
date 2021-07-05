import { AuthData } from './../../shared/models/AuthData.model';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private sessionId!: string;
  private tokenTimer: any;
  private accessToken!: string;
  private refreshToken!: string;

  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getAccessToken() {
    return this.accessToken;
  }

  getRefreshToken() {
    return this.refreshToken;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  signup(email: string, password: string, confirmPassword: string){
    const authData : AuthData = {email, password, confirmPassword};
    console.log(authData);
    return this.http.post(BASE_URL + 'users/', authData).subscribe(() => {
      this.router.navigate(['/auth/signin'])
    }, error => {
      this.authStatusListener.next(false);
    })
  }

  signin(email: string, password: string){
    const authData : AuthData = {email, password};
    console.log(authData)
    this.http.post<{accessToken: string, refreshToken: string}>(BASE_URL + 'sessions', authData)
      .subscribe( res => {
        this.accessToken = res.accessToken;
        this.refreshToken = res.refreshToken;
        if(this.accessToken) {

          const jwtParsed = JSON.parse(atob(this.accessToken.split('.')[1]));
          const expiresInDuration = jwtParsed.exp;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(this.accessToken, expirationDate, this.refreshToken);
          this.router.navigate(['/']);
        }
      }, error => {
        this.authStatusListener.next(false);
      })
  }

  signout() {
    this.http.delete(BASE_URL + 'sessions');
    this.accessToken = '';
    this.refreshToken = '';
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.sessionId = '';

    this.clearAuthData();
  }

  autoAuthUser(){
    const authInforomation = this.getAuthData();
    if (!authInforomation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInforomation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.accessToken = authInforomation.accessToken;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  private saveAuthData(accessToken: string, expirationDate: Date, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('expiration', expirationDate.toString());
    localStorage.setItem('refreshToken', refreshToken)
  }

  private clearAuthData() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expiration');
    localStorage.removeItem('refreshToken');
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.signout();
    }, duration * 1000);
  }

  private getAuthData() {
    const accessToken = localStorage.getItem('accessToken');
    const expirationDate = localStorage.getItem('expiration');
    const refreshToken = localStorage.getItem('refreshToken')
    if (!accessToken || !expirationDate || !refreshToken) {
      return;
    }
    return {
      accessToken,
      expirationDate: new Date(expirationDate),
      refreshToken
    };
  }
}
