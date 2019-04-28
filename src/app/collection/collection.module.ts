import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { CollectionComponent } from './collection/collection.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PieceProvider } from 'src/providers/PieceProvider';
import { BrandProvider } from 'src/providers/BrandProvider';
import { TypeProvider } from 'src/providers/TypeProvider';
import { RoomProvider } from 'src/providers/RoomProvider';
import {MatListModule} from '@angular/material/list';


const routes: Routes = [
  {
    path: '',
    component: CollectionComponent
  }
];

@NgModule({
  declarations: [CollectionComponent],
  providers: [PieceProvider,BrandProvider,RoomProvider,TypeProvider ],
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    CollectionComponent
  ]
})
export class CollectionModule { }
