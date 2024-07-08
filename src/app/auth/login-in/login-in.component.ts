import { Component } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent {

  importedDetails?:any;
  loginDetails?:any;
  showMessage:boolean= false;
  constructor(private loginService:SignUpService){
      this.importedDetails=this.loginService.values;
      this.loginDetails = this.loginService.values2
      console.log(this.importedDetails)
      console.log(this.loginDetails)
  }

  loginSubmit(){
    console.log(this.loginDetails)
    // return this.signUpDetails;
  }

  valiDateCreds():boolean{

    if(this.importedDetails.username == this.loginDetails.username && this.importedDetails.password == this.loginDetails.password && this.loginDetails.password!="" ){

      console.log('Valid User!')
      return true
    }
    else{
      console.log('Invalid User')
      return false
    }


  }


}
