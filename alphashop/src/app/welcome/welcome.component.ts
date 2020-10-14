import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = "Cheers I'm Welcome Component!";

  constructor() { }

  ngOnInit(): void {
    console.log(this.message);
  }

}
