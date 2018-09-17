import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('users'));
  }

  setLoggedUserID(userID) {
    localStorage.setItem('logged', '1');
    localStorage.setItem('userID', userID);
  }

  addNewUser(user) {
    let users: any[] = this.getUsers();
    if (users == null) {
      users = [user];
    } else {
      users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

}
