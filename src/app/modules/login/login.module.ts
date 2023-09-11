import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CoreModule } from '../core/core.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ApiRoutes } from 'src/app/api-routes';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    SharedModule
  ],
  providers: [ApiRoutes],
})
export class LoginModule { }
