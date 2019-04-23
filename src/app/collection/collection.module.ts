import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionComponent } from './collection/collection.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PieceProvider } from 'src/providers/PieceProvider';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  }
];

@NgModule({
  declarations: [CollectionComponent],
  providers: [PieceProvider, PieceProvider ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    CollectionComponent
  ]
})
export class CollectionModule { }
