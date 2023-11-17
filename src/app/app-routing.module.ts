import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'edit/:id',
    component: EditComponent
  },
  {
    path:'add',
    component: AddComponent
  },
  {
    path:'reservation/:id',
    component: ReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
