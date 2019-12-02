import { Component, OnInit, Input } from '@angular/core';
import { Folder } from '../shared/models/folder.model';
import { FolderService } from '../shared/services/folder.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  folders : Folder;
  @Input() name : string;

  constructor() { 
    this.folders = new Folder;
  }

  ngOnInit() {
  }

}
