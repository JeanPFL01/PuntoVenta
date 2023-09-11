import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from 'src/app/api-routes';
import { User } from 'src/app/interfaces/user';
import { Response } from 'src/app/interfaces/response';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  private ApiUrl : string = environment.endPoint + "Usuario/"

  constructor(private http: HttpClient, private api : ApiRoutes, private authentication : AuthenticationService) { }

  getUserPermissions(): Observable<Response<User>> {
    return this.http.get<Response<User>>(`${this.ApiUrl}Login?username=${this.authentication.username}&password=${this.authentication.password}`)
      .pipe(
        tap((response: Response<User>) => {
          console.log('Respuesta de la petición GET:', response);
        })
      );
  }
}
