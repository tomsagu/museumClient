import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomCRUDComponent } from './roomCRUD/roomCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: RoomCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomCRUDRoutingModule { }
