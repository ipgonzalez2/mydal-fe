import { Component, OnInit } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';

@Component({
  selector: 'app-center-layout',
  templateUrl: './center-layout.component.html',
  styleUrls: ['./center-layout.component.scss']
})
export class CenterLayoutComponent implements OnInit {

  foldersArray : Folder[];
  currentFolderId:number;
  filesArray : File[];
  
    constructor(private folderService : FolderService, private fileService : FileService) { 
    }
    
    ngOnInit() {
      this.foldersArray = [];
      this.currentFolderId=null;

      this.refreshFolders();
      this.refreshFiles();
    }

    refreshFolders(){
      this.folderService.getFolders(this.currentFolderId)
      .subscribe(
        data=> this.foldersArray = data["response"]
      );
    }

    refreshFiles(){
      this.fileService.getFiles(this.currentFolderId)
      .subscribe(
        data=> this.filesArray = data["response"]
      );
    }

    changeId(id:number){
      this.currentFolderId = id;
      this.refreshFolders();

    }

}
