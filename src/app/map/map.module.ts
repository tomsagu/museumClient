import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map/map.component';
import { PieceProvider } from 'src/providers/PieceProvider';
import { RoomProvider } from 'src/providers/RoomProvider';

const routes: Routes = [
  {
    path: '',
    component: MapComponent
  }
];

@NgModule({
  declarations: [MapComponent],
  providers: [PieceProvider,RoomProvider],
  imports: [
    CommonModule,
    MapRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
