import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiRoutes } from 'src/app/api-routes';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ApiRoutes],
})
export class LoginModule { }
