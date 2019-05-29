import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenancePieceRoutingModule } from './maintenancePiece-routing.module';
import { MaintenancePieceComponent } from './maintenancePiece/maintenancePiece.component';
import { PieceProvider } from 'src/providers/PieceProvider';
import { BrandProvider } from 'src/providers/BrandProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePieceComponent
  }
];

@NgModule({
  declarations: [MaintenancePieceComponent],
  providers: [PieceProvider,BrandProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MaintenancePieceRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenancePieceComponent
  ]
})
export class MaintenancePieceModule { }
