import { Component } from '@angular/core';
import { LISTDEBIEN } from '../db/list.bien';
import { Router } from '@angular/router';
import { Bien } from '../models/bien';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listDesBiens = LISTDEBIEN;

  constructor(private router:Router){}



  toReservePage(bien: Bien){
    this.router.navigate(['reservation',bien.id]);
  }
  
  info(title: string, mess: string) {
    Swal.fire({
      title: title,
      text: mess,
      icon: 'info',
      width: 600,
      timer: 3000,
      padding: "3em",
      backdrop: false,
      showConfirmButton: true
    });
  }

  searchFilter(value: string){
    this.listDesBiens = LISTDEBIEN;

    console.log(value);
    this.listDesBiens = this.listDesBiens.filter((bien) => {
      return bien.title.toLowerCase().includes(value.toLowerCase());
    });
    if(this.listDesBiens.length == 0){
      this.info("C'est vide !!", "Votre recherche ne correspond au titre de aucune annonce.")
    }
  }
}
