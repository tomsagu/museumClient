import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { DocumentProvider } from 'src/providers/DocumentProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent
  }
];

@NgModule({
  declarations: [DocumentationComponent],
  providers: [DocumentProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    DocumentationRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DocumentationComponent
  ]
})
export class DocumentationModule { }
