import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DocumentationCRUDRoutingModule } from './documentationCRUD-routing.module';
import { DocumentationCRUDComponent } from './documentationCRUD/documentationCRUD.component';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { HttpModule } from '@angular/http';

const routes: Routes = [
  {
    path: '',
    component: DocumentationCRUDComponent
  }
];

@NgModule({
  declarations: [DocumentationCRUDComponent],
  providers: [DocumentProvider],
  imports: [
    CommonModule,
    FormsModule,
    DocumentationCRUDRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DocumentationCRUDComponent
  ]
})
export class DocumentationCRUDModule { }
