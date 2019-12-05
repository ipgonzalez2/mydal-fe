import { Component, OnInit, ViewChild } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../environments/environment';
import { CenterLayoutService } from '../shared/services/center-layout.service'


const URL = environment.apiUrl+'file/';



@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  folder :Folder;
  folders : Folder[];
  files : File[];
  constructor(private folderService : FolderService, private toastr: ToastrService, private fileService : FileService,
    private centerService : CenterLayoutService) { 
    
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
      this.folders = [];
      this.refresh();
      console.log(JSON.parse(localStorage.getItem('currentUser')).email);
      this.uploader.onAfterAddingFile = (file) => {
        file.headers = [{
          name : "folderId",
          value : this.centerService.idFolder
        }]
        file.withCredentials = false;
      };
      this.uploader.onCompleteItem = (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
        this.refresh();
        this.toastr.success('File successfully uploaded!');
      };
      
    }

    refresh(){
      this.folderService.getFolderCreate()
      .subscribe(
        data=> this.folders = data["response"]
      );
      this.fileService.getFilesCreate()
      .subscribe(
        data => this.files = data["response"]
      );
    }

    createFolder(){
      this.folderService.createFolder(this.folder).subscribe(
        d=>{
            console.log(d);
        },
        e=>console.error(e)
      );
      this.folderService.getFolderCreate()
      .subscribe(
        data=> this.folders = data["response"]
      );

    }

    

}





