import { Component, OnInit, ViewChild } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
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
  foldersCenter : Folder[];
  filesCenter : File[];
  constructor(private folderService : FolderService, private toastr: ToastrService, private fileService : FileService,
  ) { 
    
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
      this.foldersCenter = [];
      this.refresh();
      this.uploader.onAfterAddingFile = (file) => {
        file.headers = [{
          name : "folderId",
          value : this.folderService.idFolder
        }]
        file.withCredentials = false;
        this.refresh();
      };
      this.uploader.onCompleteItem = (item: any, status: any) => {
        
        this.refresh();
        this.toastr.success('File successfully uploaded!');

      };
      
    }

    refresh(){
      this.folderService.getFolders(this.folderService.idFolder).subscribe(
        data=> this.foldersCenter = data["response"]
      );
      this.fileService.getFilesCreate()
      .subscribe(
        data => this.filesCenter = data["response"]
      );
    }

    createFolder(){
      this.folderService.createFolder(this.folder).subscribe(
        d=>{
          this.refresh();
          this.folder.NOMBRE ="";
        },
      );

    }

    closeMenu(){
     this.refresh();
    }

    spanish() {
      localStorage.setItem('locale', 'es');
      window.location.reload();
    }
  
    english() {
      localStorage.setItem('locale', 'en');
      window.location.reload();
    }

    

}





