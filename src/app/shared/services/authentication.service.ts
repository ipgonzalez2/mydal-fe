import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loggedUser = new Subject<User>();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
      return this.http.post<any>(environment.apiUrl+'users/login', { email, password })
          .pipe(map(res => {
              // login successful if there's a jwt token in the response
              var user: User = new User();

              if (res["response"][0] && res["response"][1]) {
                  user.id = res["response"][0]["ID_USUARIO"];
                  user.username= res["response"][0]["USERNAME"],
                     user.email=res["response"][0]["EMAIL"];
                  user.jwt = res["response"][1];
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.loggedUser.next(user);
              }

              return user;
          }));
  }

  reLogin() {
      if (localStorage.getItem('currentUser') != null) {
          this.loggedUser.next(JSON.parse(localStorage.getItem('currentUser')));
      }
  }

  logout() {
      // remove user from local storage to log user out
      this.loggedUser.next(undefined);
      localStorage.removeItem('currentUser');
      this.router.navigate(["/"]);
  }
}