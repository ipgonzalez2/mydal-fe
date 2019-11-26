import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public register: boolean;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    this.register = false;
    this.user=new User(); 
  }

  public login(){
    console.log(this.user);
    this.usersService.loginUser(this.user).subscribe(
      d=>{
          console.log(d);
          this.register = true;
          this.user.email=""; //preguntar yery si va bien
          this.user.password= "";
          this.user.username = "";
      },
      e=>console.error(e)
    );

  }

  public registerUser(){
    console.log(this.user);
    this.usersService.registerUser(this.user).subscribe(
      d=>{
          console.log(d);
          this.register = false;
          this.user.email=""; //preguntar yery si va bien
          this.user.password= "";
      },
      e=>console.error(e)
    );

  }
}
