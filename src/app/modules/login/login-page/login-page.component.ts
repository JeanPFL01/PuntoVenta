import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/authentication/authentication.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {


  ngOnInit(): void {
  }
  constructor(private authentication : AuthenticationService, private router : Router){}

  username : string = ""
  password : string = ""

  message : string = ""
  onLoginFormSubmit(): void {
    const { username, password } = this;
    if(username == "" || password == ""){
      $('#btn-login-modal-empty').trigger('click');
    }else{
    this.authentication.login(username, password).subscribe((isAuthenticated: boolean) => {
      if (isAuthenticated) {
        $('#btn-login-modal-success').trigger('click');
        this.message = this.authentication.message
        //this.router.navigate(['/home']);
      } else {
        $('#btn-login-modal-error').trigger('click');
        this.message = this.authentication.message
      }
    });
    }
  }
}
