import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenanceRoomRoutingModule } from './maintenanceRoom-routing.module';
import { MaintenanceRoomComponent } from './maintenanceRoom/maintenanceRoom.component';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { RoomProvider } from 'src/providers/RoomProvider';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceRoomComponent
  }
];

@NgModule({
  declarations: [MaintenanceRoomComponent],
  providers: [RoomProvider],
  imports: [
    CommonModule,
    MaintenanceRoomRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenanceRoomComponent
  ]
})
export class MaintenanceRoomModule { }
