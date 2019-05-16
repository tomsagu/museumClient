import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenanceDocumentationRoutingModule } from './maintenanceDocumentation-routing.module';
import { MaintenanceDocumentationComponent } from './maintenanceDocumentation/maintenanceDocumentation.component';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceDocumentationComponent
  }
];

@NgModule({
  declarations: [MaintenanceDocumentationComponent],
  providers: [DocumentProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MaintenanceDocumentationRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenanceDocumentationComponent
  ]
})
export class MaintenanceDocumentationModule { }
