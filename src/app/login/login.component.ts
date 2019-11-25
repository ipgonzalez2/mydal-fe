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

  }

  public registerUser(){
    console.log(this.user);
    this.usersService.registerUser(this.user).subscribe(
      d=>{
          console.log(d);
      },
      e=>console.error(e)
    );

  }
}
