import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { AuthenticationService } from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class FolderService {
  headers: HttpHeaders;
  idFolder: number;
  

  constructor(
    private http: HttpClient,
    private auth:AuthenticationService
    ) { 
    this.idFolder = null;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("currentUser")).jwt
    });
  }


  getFolders(id:number) {
    // const userId=JSON.parse(localStorage.getItem('currentUser')).id;
    this.idFolder = id;
    return this.http.get<Folder[]>(environment.apiUrl+'folder/'+this.idFolder, { headers: this.headers });
  }

  createFolder(folder:Folder){
    return this.http.post(environment.apiUrl+'folder/create/'+this.idFolder, folder,{ headers: this.headers });
  }

}
