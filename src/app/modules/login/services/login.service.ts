import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiRoutes } from 'src/app/api-routes';
import * as $ from 'jquery';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario : string = ""
  password : string = ""

  constructor(private http: HttpClient, private api : ApiRoutes) { }

  login(usuario: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.api.UrlUsuario + this.api.login + "?username=" + usuario + "&password=" + password)
      .pipe(
        map(response => response.data as boolean)
      );
  }
}
