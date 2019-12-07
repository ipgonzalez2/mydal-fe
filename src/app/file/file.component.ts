import { Component, OnInit, Input } from '@angular/core';
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
  @Input() name : string;
  @Input() id : number;
  nameFile : string;
  shareFile : string;
  url: string;
  urlNueva: string;


  constructor(private fileService : FileService, private toastr: ToastrService) {
    this.files = new File();
    this.toastr.toastrConfig.disableTimeOut = true;
    this.toastr.toastrConfig.tapToDismiss = false;
    this.toastr.toastrConfig.closeButton = true;
   }

  ngOnInit() {
  
    
  }

  download(){
    this.nameFile = '(' + this.id + ')' + this.name;
    this.fileService.download(this.id, this.nameFile);
  }

  share(){
    this.fileService.share(this.id, this.url).subscribe(data=>{
      this.toastr.info(data["response"], "Link de descarga");}
    );
  }

}
