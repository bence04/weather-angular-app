import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService implements CanActivate {

  public logged = false;

  constructor(public router: Router) {}

  canActivate(): boolean {

    this.logged = (localStorage.getItem('logged') !== null) ? true : false;

    if (!this.logged) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
