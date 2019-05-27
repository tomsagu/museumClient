import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceRoomComponent } from './maintenanceRoom/maintenanceRoom.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceRoomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoomRoutingModule { }
