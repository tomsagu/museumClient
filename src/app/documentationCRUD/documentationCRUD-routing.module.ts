import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationCRUDComponent } from './documentationCRUD/documentationCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationCRUDRoutingModule { }
