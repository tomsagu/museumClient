import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ConfirmDeleteDialogRoutingModule } from './confirmDeleteDialog-routing.module';
import { ConfirmDeleteDialogComponent } from './confirmDeleteDialog/confirmDeleteDialog.component';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: ConfirmDeleteDialogComponent
  }
];

@NgModule({
  declarations: [ConfirmDeleteDialogComponent],
  providers: [DocumentProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    ConfirmDeleteDialogRoutingModule,
    HttpModule,
    MatDialogModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ConfirmDeleteDialogComponent
  ]
})
export class ConfirmDeleteDialogModule { }
