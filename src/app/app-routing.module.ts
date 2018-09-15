import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CheckAuthService as CheckAuth } from './check-auth.service';
import { HomeComponent } from './home/home.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'home', component: HomeComponent, canActivate: [CheckAuth] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CheckAuth]
})
export class AppRoutingModule { }
