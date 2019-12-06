import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { AuthenticationService } from './authentication.service';

import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  headers: HttpHeaders;
  idFolder: number;

  constructor(
    private http: HttpClient,
    private auth:AuthenticationService,
    private sanitizer: DomSanitizer
    ) { 
      this.idFolder = null;
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("currentUser")).jwt
    });
  }

  getFiles(id:number) {
    console.log("hola");
    // const userId=JSON.parse(localStorage.getItem('currentUser')).id;
    this.idFolder = id;
    return this.http.get<File[]>(environment.apiUrl+'file/'+this.idFolder, { headers: this.headers });
  }

  getFilesCreate() {
    return this.http.get<File[]>(environment.apiUrl+'file/'+this.idFolder, { headers: this.headers });
  }

  download(fileName: string) : void {
    this.http.get(environment.apiUrl+'file/download/'+fileName, { headers : {"userEmail" : JSON.parse(localStorage.getItem("currentUser")).email },responseType: 'blob'}).subscribe(res => {
      var url =window.URL.createObjectURL(res);
      window.open(url);
    });
  }
}