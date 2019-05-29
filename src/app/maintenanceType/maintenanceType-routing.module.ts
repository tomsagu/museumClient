import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceTypeComponent } from './maintenanceType/maintenanceType.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceTypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceTypeRoutingModule { }
