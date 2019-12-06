import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
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
  @Input() files : File[];
  @Input() folders : Folder[];
  oldFolder :Folder;
  oldFile : File;
  //auxfolder : Folder[];
  
    constructor(private folderService : FolderService, private fileService : FileService) { 

    }
    
    ngOnInit() {
      this.currentFolderId=null;
      //this.auxfolder = [];
      this.oldFolder = new Folder;
      this.oldFile = new File;
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
        data=> this.files = data["response"]
      );
    }

    changeId(id:number){
      this.currentFolderId = id;
      this.refreshFolders();
      this.refreshFiles();
    }
    

    MostrarCarpeta(folderNow){
      
      this.folders.forEach(element => {
        if(element.ID_CARPETA === folderNow.ID_CARPETA){
          if(element.ID_CARPETA === this.oldFolder.ID_CARPETA){
            if(element.menu){
              element.menu = false;
            }else{
              element.menu = true;
            }
          }else{
            element.menu = true;
            this.oldFolder.menu = false;
          }
          
        }
      });

      this.files.forEach(element => {

        element.menu = false;
    });


      this.oldFolder = folderNow;
      
    }

    MostrarFichero(fileNow){      
      this.files.forEach(element => {
        if(element.ID_FICHERO === fileNow.ID_FICHERO){
          if(element.ID_FICHERO === this.oldFile.ID_FICHERO){
            if(element.menu){
              element.menu = false;
            }else{
              element.menu = true;
            }
          }else{
            element.menu = true;
            this.oldFile.menu = false;
          }
        }
      });

      this.folders.forEach(element => {

          element.menu = false;
      });
      this.oldFile = fileNow;
      
    }

    EliminarCarpeta(folderNow){
      this.folders = this.folders.filter(folder => folder.ID_CARPETA != folderNow.ID_CARPETA);
      //this.changeId(folderNow.PADRE);
    }

    
  

}
