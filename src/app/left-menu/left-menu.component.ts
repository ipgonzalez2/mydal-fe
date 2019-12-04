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

  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'image'
  });

  
    constructor(private folderService : FolderService, private toastr: ToastrService) { 
    }
    
    ngOnInit() {
      console.log("ines");
      this.uploader.onAfterAddingFile = (file) => {
        file.withCredentials = false;
        this.uploader["itemAlias"] = file._file.name;
        console.log(this.uploader["itemAlias"]);
      };
      this.uploader.onCompleteItem = (item: any, status: any) => {
        console.log('Uploaded File Details:', item);
        this.toastr.success('File successfully uploaded!');
      };
    }

    

}





