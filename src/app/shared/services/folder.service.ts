import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Folder } from '../models/folder.model';
@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http: HttpClient) { }


  getFolders() {
    return this.http.get<Folder[]>(environment.apiUrl+'folder/');
  }

}
