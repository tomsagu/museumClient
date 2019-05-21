import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmDeleteDialogComponent } from './confirmDeleteDialog/confirmDeleteDialog.component';

const routes: Routes = [
  {
    path: '',
    component: ConfirmDeleteDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfirmDeleteDialogRoutingModule { }
