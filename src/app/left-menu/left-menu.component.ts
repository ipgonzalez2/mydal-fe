import { Component, OnInit } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';


const URL = environment.apiUrl+'file/';



@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  folder :Folder;

  constructor(private folderService : FolderService, private toastr: ToastrService) { 
    
  }
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image',
    headers: [{
      name: "userEmail",
      value: JSON.parse(localStorage.getItem("currentUser")).email,
      },
      {
        name: "userId",
        value: JSON.parse(localStorage.getItem("currentUser")).id,
      },
    {
      name: 'Authorization',
      value: 'Bearer ' + JSON.parse(localStorage.getItem("currentUser")).jwt
  }]});
    
    ngOnInit() { 
      this.folder = new Folder();
      console.log(JSON.parse(localStorage.getItem('currentUser')).email);
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem = (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
        this.toastr.success('File successfully uploaded!');
      };
    }

    createFolder(){
      this.folderService.createFolder(this.folder).subscribe(
        d=>{
            console.log(d);
        },
        e=>console.error(e)
      );

    }

    

}





