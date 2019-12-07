import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public register: boolean;
  public url: string;

  constructor(private usersService:UsersService, 
    private router: Router, 
    private route: ActivatedRoute,
    private auth:AuthenticationService) { 
    
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

    this.auth.login(this.user.email,this.user.password).subscribe(
      d=>{

          this.register = true;
          this.user.email=""; //preguntar yery si va bien
          this.user.password= "";
          this.user.username = "";

          this.router.navigate([this.url]);
      },
      e=>console.error(e)
    );

  }

  public registerUser(){

    this.usersService.registerUser(this.user).subscribe(
      d=>{
          
          this.register = false;
          this.user.email=""; //preguntar yery si va bien
          this.user.password= "";
      },
      e=>console.error(e)
    );

  }

  spanish() {
    localStorage.setItem('locale', 'es');
    window.location.reload();
  }

  english() {
    localStorage.setItem('locale', 'en');
    window.location.reload();
  }
  
}
