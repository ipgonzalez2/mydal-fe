import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService, ToastrConfig } from 'ngx-toastr';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  files : File;
  @Input() fil : File;
  @Output() mostrarFichero = new EventEmitter<File>();
  hola : boolean;
  nameFile : string;
  shareFile : string;
  url: string;


  constructor(private fileService : FileService, private toastr: ToastrService) {
    this.files = new File();
    this.toastr.toastrConfig.disableTimeOut = true;
    this.toastr.toastrConfig.tapToDismiss = false;
    this.toastr.toastrConfig.closeButton = true;
   }

  ngOnInit() {
  }

  MostrarFichero(){
    this.mostrarFichero.emit(this.fil)

  }

  download(){
    this.nameFile = '(' + this.fil.ID_FICHERO + ')' + this.fil.NOMBRE;
    this.fileService.download(this.fil.ID_FICHERO, this.nameFile);
  }

  share(){
    this.fileService.share(this.fil.ID_FICHERO, this.url).subscribe(data=>{
      this.toastr.info(data["response"], "Link de descarga");}
    );
  }

  delete(){
    this.fileService.delete(this.fil).subscribe(res => {
      this.toastr.success("Fichero borrado correctamente");
    })
  }

}
