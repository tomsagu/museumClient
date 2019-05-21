import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceArticleDialogComponent } from './maintenanceArticleDialog/maintenanceArticleDialog.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceArticleDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceArticleDialogRoutingModule { }
