import { Component } from '@angular/core';
import { LISTDEBIEN } from '../db/list.bien';
import { Bien } from '../models/bien';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  listDesBiens = LISTDEBIEN;
  newBien: Bien = new Bien();

  addBien(){
    this.newBien.id = LISTDEBIEN.length+1;
    LISTDEBIEN.unshift(this.newBien)
  }

}
