import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CenterLayoutService {

  idFolder: number;
  

  constructor() { 
    this.idFolder = null;
  }


  setIdFolder(id:number) {
    // const userId=JSON.parse(localStorage.getItem('currentUser')).id;
    this.idFolder = id;
  }

}
