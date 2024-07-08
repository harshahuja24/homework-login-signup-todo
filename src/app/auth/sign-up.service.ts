import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  
  constructor() { }

  values = {

    username:'',
    email:'',
    password:'',
    gender:'',
    branch:'',

  }

  values2 = {
    username:'',
    password:''
  }

  details(){
    return this.values
  }

  details2(){
    return this.values2
  }
}
