import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginInComponent } from './auth/login-in/login-in.component';

const routes: Routes = [
  {
    path:'sign-up',
    component:SignUpComponent
  },
  {
    path:'login-in',
    component:LoginInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
