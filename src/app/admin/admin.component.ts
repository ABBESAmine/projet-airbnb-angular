import { Component } from '@angular/core';
import { LISTDEBIEN } from '../db/list.bien';
import { Bien } from '../models/bien';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router){}
  
  listDesBiens = LISTDEBIEN;

  removeBien(bien:Bien){
    let index = LISTDEBIEN.indexOf(bien);
    LISTDEBIEN.splice(index,1)
  }

  toEditPage(bien: Bien){
    this.router.navigate(['edit',bien.id]);
  }

}
