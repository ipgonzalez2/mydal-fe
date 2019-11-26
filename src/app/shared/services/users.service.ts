import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  registerUser(user:User):Observable<any> {
    return this.http.post(environment.apiUrl+'users/register',user);
  }

  loginUser(user:User):Observable<any> {
    return this.http.post(environment.apiUrl+'users/login',user);
  }
}
