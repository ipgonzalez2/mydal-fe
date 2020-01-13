import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

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
    private auth:AuthenticationService,
    private toastr: ToastrService) { 
    this.toastr.toastrConfig.disableTimeOut = false;
    this.toastr.toastrConfig.extendedTimeOut;
    this.toastr.toastrConfig.tapToDismiss = false;
    this.toastr.toastrConfig.closeButton = true;
    
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
    this.user.username="";
    this.user.email=""; 
    this.user.password= "";
  }

  public login(){
    if(this.user.email=="" || this.user.email == null){
      this.toastr.error("El email es obligatorio","Error de logueo")
    }else{
      if(this.user.password=="" || this.user.password == null){
        this.toastr.error("La contraseña es obligatoria","Error de logueo")
      }else{
        this.auth.login(this.user.email,this.user.password).subscribe(
          d=>{
    
              this.register = true;
              this.user.username="";
              this.user.email=""; 
              this.user.password= "";
    
              this.router.navigate([this.url]);
          },
          
          e=>this.toastr.error(e["error"]["error"], "Error de autenticación")
          
          
        );
      }
    }

    

  }

  public registerUser(){
    
    
    if(this.user.username=="" || this.user.username == null){
      this.toastr.error("El nombre es obligatorio","Error de registro")
    }else{
      if(this.user.email=="" || this.user.email == null){
        this.toastr.error("El email es obligatorio","Error de registro")
      }else{
        if(this.user.password=="" || this.user.password == null){
          this.toastr.error("La contraseña es obligatoria","Error de registro")
        }else{
          this.usersService.registerUser(this.user).subscribe(
            d=>{
                
                this.register = false;
                this.user.username="";
                this.user.password= "";
               
            },
            e=>this.toastr.error(e["error"]["response"], "Error de registro")
          );
        }
      }
      
    }

   

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
