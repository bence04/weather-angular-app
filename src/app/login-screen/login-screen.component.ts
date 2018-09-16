import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  user = {
    name: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  loginBtnClick() {
    console.log(this.user);
  }

}
