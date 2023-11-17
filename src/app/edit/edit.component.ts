import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTDEBIEN } from '../db/list.bien';
import { Bien } from '../models/bien';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private router:Router){}

  listDesBiens = LISTDEBIEN;
  bienSelected: Bien = new Bien();

  ngOnInit(): void {
    let idUrl:number | any = this.activeRoute.snapshot.paramMap.get('id');
    console.log(idUrl)
    
    for(let i:number = 0;i < this.listDesBiens.length;i++){
      if(idUrl == this.listDesBiens[i].id){
        this.bienSelected = this.listDesBiens[i];
        break;
      }
    }
  }

}
