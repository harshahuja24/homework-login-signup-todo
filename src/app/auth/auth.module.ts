import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginInComponent } from './login-in/login-in.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignUpComponent,
    LoginInComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SignUpComponent,
    LoginInComponent
  ]
})
export class AuthModule { }
