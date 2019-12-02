import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public register: boolean;
  public url: string;

  constructor(private usersService:UsersService, private router: Router, private route: ActivatedRoute) { 
    
    this.route.queryParams.subscribe(
      data => {
        if (data["url"] == undefined && this.url == undefined) {
          this.url = '/showAll';
        } else if (data["url"] != undefined) {
          
          this.url = data["url"];
        }
      }
    );

  }

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
          console.log("noelia");
          this.router.navigate([this.url]);
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
