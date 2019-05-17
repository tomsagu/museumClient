import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TypeCRUDRoutingModule } from './typeCRUD-routing.module';
import { TypeCRUDComponent } from './typeCRUD/typeCRUD.component';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { TypeProvider } from 'src/providers/TypeProvider';

const routes: Routes = [
  {
    path: '',
    component: TypeCRUDComponent
  }
];

@NgModule({
  declarations: [TypeCRUDComponent],
  providers: [TypeProvider],
  imports: [
    CommonModule,
    TypeCRUDRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    TypeCRUDComponent
  ]
})
export class TypeCRUDModule { }
