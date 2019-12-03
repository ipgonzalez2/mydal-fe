import { Component, OnInit, Input } from '@angular/core';
import { File } from '../shared/models/file.model';
import { FileService } from '../shared/services/file.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  files : File;
  @Input() name : string;

  constructor() {
    this.files = new File();
   }

  ngOnInit() {
  }

}
