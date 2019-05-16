import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionCRUDComponent } from './collectionCRUD/collectionCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionCRUDRoutingModule { }
