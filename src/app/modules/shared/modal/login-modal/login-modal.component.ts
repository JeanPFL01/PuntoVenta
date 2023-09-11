import { Component, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/modules/core/permissions/permissions.service';
import { User } from 'src/app/interfaces/user';
import { Response } from 'src/app/interfaces/response';
import { Router } from '@angular/router';
import { LoginPageComponent } from 'src/app/modules/login/login-page/login-page.component';
import { AuthenticationService } from 'src/app/modules/core/authentication/authentication.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})

export class LoginModalComponent implements OnInit {
  userData: User | null = null;

  constructor(private authentication : AuthenticationService, private permissions: PermissionsService, private router : Router, private loginPage : LoginPageComponent) { }

  ngOnInit(): void {
    this.obtenerDatosDelUsuario();
  }

  obtenerDatosDelUsuario(): void {
    this.permissions.getUserPermissions().subscribe((response: Response<User>) => {
      if (response.isSuccess) {
        // Los datos del usuario están en response.data
        this.userData = response.data;
      } else {
        // Handle error si es necesario
        console.error('Error en la obtención de datos:', response.message);
      }
    });
  }
  IngresarAlMenu() {
    this.router.navigate(['home']);
  }
}
