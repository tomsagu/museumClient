import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenancePieceComponent } from './maintenancePiece/maintenancePiece.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenancePieceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenancePieceRoutingModule { }
