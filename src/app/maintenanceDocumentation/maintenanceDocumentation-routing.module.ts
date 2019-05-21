import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaintenanceDocumentationComponent } from './maintenanceDocumentation/maintenanceDocumentation.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceDocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceDocumentationRoutingModule { }
