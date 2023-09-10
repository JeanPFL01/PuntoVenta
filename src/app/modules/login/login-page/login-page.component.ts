import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/modules/login/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  username = '';
  password = '';

  ngOnInit(): void {
  }

  constructor(private loginService : LoginService){}

}
