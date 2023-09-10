import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from 'src/app/api-routes';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private username : string = ""
  private password : string = ""
  private isAuthenticated = false;

  constructor(private http: HttpClient, private api : ApiRoutes){}

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.api.UrlUsuario + this.api.login + "?username=" + username + "&password=" + password)
      .pipe(
        map(response => {
          if (response.data === true) {
            this.isAuthenticated = true;
          } else {
            this.isAuthenticated = false;
          }
          return response.data as boolean;
        })
      );
  }


  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
