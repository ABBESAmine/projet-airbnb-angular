import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LISTDEBIEN } from '../db/list.bien';
import { Bien } from '../models/bien';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
})
export class ReservationComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private router: Router) {}
  listDesBiens = LISTDEBIEN;
  bienSelected: Bien = new Bien();

  ngOnInit(): void {
    let idUrl: number | any = this.activeRoute.snapshot.paramMap.get('id');
    console.log(idUrl);

    for (let i: number = 0; i < this.listDesBiens.length; i++) {
      //console.log(i)
      if (idUrl == this.listDesBiens[i].id) {
        this.bienSelected = this.listDesBiens[i];
        console.log('oui');
        console.log(this.bienSelected);
        break;
      }
    }
    this.bienSelected.dateArrive = new Date()
    this.bienSelected.dateDepart = new Date()
  }

  reserverBien() {
    this.bienSelected.reserved = true;

    this.bienSelected.dateArrive = new Date(this.bienSelected.dateArrive)
    this.bienSelected.dateDepart = new Date(this.bienSelected.dateDepart)

    var difference: number =
      this.bienSelected.dateDepart.getTime() -
      this.bienSelected.dateArrive.getTime();
    difference /= 1000 * 60 * 60 * 24;
    console.log(difference);

    this.bienSelected.prix *= difference;
    this.router.navigate(['']);
  }
}
