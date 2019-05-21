import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenanceTypeRoutingModule } from './maintenanceType-routing.module';
import { MaintenanceTypeComponent } from './maintenanceType/maintenanceType.component';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { TypeProvider } from 'src/providers/TypeProvider';


const routes: Routes = [
  {
    path: '',
    component: MaintenanceTypeComponent
  }
];

@NgModule({
  declarations: [MaintenanceTypeComponent],
  providers: [TypeProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MaintenanceTypeRoutingModule,
    HttpModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenanceTypeComponent
  ]
})
export class MaintenanceTypeModule { }
