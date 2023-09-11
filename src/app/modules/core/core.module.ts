import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard } from './authentication/auth.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { PermissionsService } from './permissions/permissions.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthGuard,
    AuthenticationService,
    PermissionsService]

})
export class CoreModule { }
