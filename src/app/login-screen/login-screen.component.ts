import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from '../db.service';

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

  constructor(public router: Router, public dbService: DbService) {

  }

  ngOnInit() {
    if (this.dbService.getUsers()) {
      this.users = this.dbService.getUsers();
    }
  }

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
      this.users.forEach(element => {
        if (element.name === this.user.name) {
          founded = true;
          if (element.password === this.user.password) {
            this.dbService.setLoggedUserID(element.id);
            this.router.navigate(['home']);
          } else {
            this.loginError = true;
          }
        }
      });

      if (!founded) {
        this.user.id = this.users.length;
        this.dbService.addNewUser(this.user);
        this.dbService.setLoggedUserID(this.user.id);
        this.router.navigate(['home']);
      }
    }
  }
}
