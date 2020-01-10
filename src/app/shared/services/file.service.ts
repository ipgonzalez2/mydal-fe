import { Injectable } from '@angular/core';

import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { File } from '../models/file.model';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { AuthenticationService } from './authentication.service';

import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';

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
    
    // const userId=JSON.parse(localStorage.getItem('currentUser')).id;
    this.idFolder = id;
    return this.http.get<File[]>(environment.apiUrl+'file/'+this.idFolder, { headers: this.headers });
  }


  download(fileId: number, fileName : string) : void {
    this.http.get(environment.apiUrl+'file/download/'+fileId, { headers : {"userEmail" : JSON.parse(localStorage.getItem("currentUser")).email
    , 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("currentUser")).jwt,
    "userId" : JSON.parse(localStorage.getItem("currentUser")).id },responseType: 'blob'}).subscribe(res => {
      saveAs(res, fileName); 
    });
  }

  share(fileId : number, url:string) :Observable<any>{
    return this.http.post(environment.apiUrl+'file/shared/'+fileId, url, { headers :this.headers}); 
  }

  delete(file:File) : Observable<any>{
    return this.http.delete(environment.apiUrl+'file/'+file.ID_FICHERO+'/'+file.NOMBRE,{ headers: this.headers });
  }

}


