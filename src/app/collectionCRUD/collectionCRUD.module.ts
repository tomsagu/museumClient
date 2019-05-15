import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionCRUDRoutingModule } from './collectionCRUD-routing.module';
import { CollectionCRUDComponent } from './collectionCRUD/collectionCRUD.component';

@NgModule({
  declarations: [CollectionCRUDComponent],
  imports: [
    CommonModule,
    CollectionCRUDRoutingModule
  ],
  exports: [
    CollectionCRUDComponent
  ]
})
export class CollectionCRUDModule { }
