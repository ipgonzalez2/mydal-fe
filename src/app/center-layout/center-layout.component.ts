import { Component, OnInit, Input } from '@angular/core';
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

  currentFolderId:number;
  filesArray : File[];
  @Input() folders : Folder[];
  
  
    constructor(private folderService : FolderService, private fileService : FileService) { 

    }
    
    ngOnInit() {
      this.currentFolderId=null;

      this.refreshFolders();
      this.refreshFiles();
    }

    refreshFolders(){
      this.folderService.getFolders(this.currentFolderId)
      .subscribe(
        data=> this.folders = data["response"]
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
      this.refreshFiles();

    }

}
