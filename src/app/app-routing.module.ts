import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/core/authentication/auth.guard';

const routes: Routes = [
  {
    path:'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
