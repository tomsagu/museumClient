import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PieceCRUDRoutingModule } from './PieceCRUD-routing.module';
import { PieceCRUDComponent } from './pieceCRUD/pieceCRUD.component';
import { PieceProvider } from 'src/providers/PieceProvider';
import { HttpModule } from '@angular/http';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: PieceCRUDComponent
  }
];

@NgModule({
  declarations: [PieceCRUDComponent],
  providers: [PieceProvider],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    PieceCRUDRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PieceCRUDComponent
  ]
})
export class PieceCRUDModule { }
