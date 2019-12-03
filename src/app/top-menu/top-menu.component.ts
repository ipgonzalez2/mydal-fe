import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
public user:User;
  constructor(private auth:AuthenticationService) { }

  ngOnInit() {
    this.user=JSON.parse(localStorage.getItem('currentUser'));
  }
  
  logout(){
    this.auth.logout();
  }

}
