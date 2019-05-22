import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenanceBrandRoutingModule } from './maintenanceBrand-routing.module';
import { MaintenanceBrandComponent } from './maintenanceBrand/maintenanceBrand.component';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import { BrandProvider } from 'src/providers/BrandProvider';


const routes: Routes = [
  {
    path: '',
    component: MaintenanceBrandComponent
  }
];

@NgModule({
  declarations: [MaintenanceBrandComponent],
  providers: [BrandProvider],
  imports: [
    CommonModule,
    MaintenanceBrandRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenanceBrandComponent
  ]
})
export class MaintenanceBrandModule { }
