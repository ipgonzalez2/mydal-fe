import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  @Input() fil : File;
  //@Output() mostrarCarpeta = new EventEmitter<File>();
  //@Output() eliminarCarpeta = new EventEmitter<File>();

  constructor(private fileService: FileService) { 
    
  }

  ngOnInit() {
    console.log(this.fil);

  }

  /*MostrarCarpeta(){
    this.mostrarCarpeta.emit(this.fold)
  }*/

  /*EliminarCarpeta(){
    this.eliminarCarpeta.emit(this.fold)
  }*/

  download(){
    this.fileService.download(this.fil.NOMBRE);
  }

}
