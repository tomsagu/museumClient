import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { PieceRoutingModule } from './piece-routing.module';
import { PieceComponent } from './piece/piece.component';

import { PieceProvider } from 'src/providers/PieceProvider';

const routes: Routes = [
  {
    path: '',
    component: PieceComponent
  }
];

@NgModule({
  declarations: [PieceComponent],
  providers: [PieceProvider],
  imports: [
    CommonModule,
    PieceRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PieceComponent
  ]
})
export class PieceModule { }
