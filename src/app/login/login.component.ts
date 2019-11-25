import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor() { }

  ngOnInit() {
    this.email = '';
    this.password = '';
  }

  public login(){
    console.log(this.email);
    console.log(this.password);
  }
}
