import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceBrandComponent } from './maintenanceBrand/maintenanceBrand.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceBrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceBrandRoutingModule { }
