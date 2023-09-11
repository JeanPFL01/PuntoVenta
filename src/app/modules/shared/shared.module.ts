import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HeaderComponent } from './page/header/header.component';
import { FooterComponent } from './page/footer/footer.component';
import { SidebarComponent } from './page/sidebar/sidebar.component';
import { MainComponent } from './page/main/main.component';
import { LoginModalComponent } from './modal/login-modal/login-modal.component';
import { HomeModalComponent } from './modal/home-modal/home-modal.component';

@NgModule({
  declarations: [
    ErrorPageComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent,
    LoginModalComponent,
    HomeModalComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoginModalComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
