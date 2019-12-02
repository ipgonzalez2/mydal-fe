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
  
    constructor(private folderService : FolderService) { 
      this.foldersArray = [];
    }
  
    ngOnInit() {
      this.folderService.getFolders().subscribe(
        data=> this.foldersArray = data["response"]
      );
      console.log(this.foldersArray);
    }

}





