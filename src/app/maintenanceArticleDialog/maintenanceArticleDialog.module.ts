import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaintenanceArticleDialogRoutingModule } from './maintenanceArticleDialog-routing.module';
import { MaintenanceArticleDialogComponent } from './maintenanceArticleDialog/maintenanceArticleDialog.component';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceArticleDialogComponent
  }
];

@NgModule({
  declarations: [MaintenanceArticleDialogComponent],
  providers: [DocumentProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MaintenanceArticleDialogRoutingModule,
    HttpModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MaintenanceArticleDialogComponent
  ]
})
export class MaintenanceArticleDialogModule { }
