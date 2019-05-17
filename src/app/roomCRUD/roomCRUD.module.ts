import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RoomCRUDRoutingModule } from './roomCRUD-routing.module';
import { RoomCRUDComponent } from './roomCRUD/roomCRUD.component';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { RoomProvider } from 'src/providers/RoomProvider';

const routes: Routes = [
  {
    path: '',
    component: RoomCRUDComponent
  }
];

@NgModule({
  declarations: [RoomCRUDComponent],
  providers: [RoomProvider],
  imports: [
    CommonModule,
    RoomCRUDRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RoomCRUDComponent
  ]
})
export class RoomCRUDModule { }