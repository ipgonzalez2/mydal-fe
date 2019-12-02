import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  public user: User;

  constructor(private usersService:UsersService) { }

  ngOnInit() {
    //this.user=new User();
    //En el anterior tenemos que llamar al usuario de la sesión
  }

}
