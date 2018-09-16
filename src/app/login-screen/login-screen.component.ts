import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  user = {
    id: 0,
    name: '',
    password: ''
  };
  users = [];
  loginError = false;
  inputError = false;

  constructor(public router: Router) {
    if (localStorage.getItem('users')) {
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }

  ngOnInit() {}

  checkInputs() {
    if (this.user.name === '' || this.user.password === '') {
      this.inputError = true;
      this.loginError = false;
      return false;
    }
    this.inputError = false;
    return true;
  }

  loginBtnClick() {
    if (this.checkInputs()) {
      let founded = false;
      Object.keys(this.users).forEach(key => {
        if (this.users[key].name === this.user.name) {
          founded = true;
          if (this.users[key].password === this.user.password) {
            localStorage.setItem('logged', '1');
            this.router.navigate(['home']);
          } else {
            this.loginError = true;
          }
        }
      });

      if (!founded) {
        this.user.id = this.users.length;
        this.users.push(this.user);
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('logged', '1');
        this.router.navigate(['home']);
      }
    }
  }
}
