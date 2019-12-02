import { Component, OnInit } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';;

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  foldersArray : Folder[];
  currentFolderId:number;
  
    constructor(private folderService : FolderService) { 
    }
    
    ngOnInit() {
      this.foldersArray = [];
      this.currentFolderId=null;

      this.refreshFolders();
    }

    refreshFolders(){
      this.folderService.getFolders(this.currentFolderId)
      .subscribe(
        data=> this.foldersArray = data["response"]
      );
    }

    changeId(id:number){
      this.currentFolderId = id;
      this.refreshFolders();

    }

}





