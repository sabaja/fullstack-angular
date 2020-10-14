import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = "";
  password = "";
  auth = false;
  errorMessage = "Your user or your password is wrong!"
  loginMessage = "Welcome to Alphashop ";
  constructor() { }

  ngOnInit(): void {
  }

  manageLogin() : void{

    if(this.userId === "Jacopo" && this.password === "1234"){
      this.auth = true;
      console.log("Hello " + this.userId)
    } else {
      this.auth = false;
      console.log(this.errorMessage)
    }
  }
}
