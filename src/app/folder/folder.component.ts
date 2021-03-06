import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  
  @Input() fold : Folder;
  @Output() mostrarCarpeta = new EventEmitter<Folder>();
  @Output() eliminarCarpeta = new EventEmitter<Folder>();
  @Output() changeId = new EventEmitter<number>();
  modal : boolean

  constructor() { 
    
  }

  ngOnInit() {
  }

  ChangeId(){
    this.changeId.emit(this.fold.ID_CARPETA);

  }

  MostrarCarpeta(){
    this.mostrarCarpeta.emit(this.fold)
  }

  EliminarCarpeta(){
    this.eliminarCarpeta.emit(this.fold)
  }


}
