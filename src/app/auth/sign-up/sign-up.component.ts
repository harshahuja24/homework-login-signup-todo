import { Component } from '@angular/core';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpDetails:any;
  constructor(private signUpService:SignUpService){
    this.signUpDetails = this.signUpService.values
  }
  showMessage:boolean= false;
  submitForm(){
    console.log(this.signUpDetails)
    // return this.signUpDetails;
  }
}
