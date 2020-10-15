import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthappService} from "../services/authapp.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId = "";
  password = "";
  auth = true;
  errorMsg = "Your user or your password is wrong!"
  loginMsg = "Welcome to Alphashop ";

  constructor(private router: Router, private authappService: AuthappService) {
  }

  ngOnInit(): void {
  }

  manageLogin(): void {

    if (this.authappService.manageAuth(this.userId, this.password)) {
      this.auth = true;
      console.log("Hello " + this.userId);
      this.router.navigate(['welcome', this.userId]);
    } else {
      this.auth = false;
      console.log(this.errorMsg);
    }
  }
}
