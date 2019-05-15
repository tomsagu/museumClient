import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieceCRUDComponent } from './pieceCRUD/pieceCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: PieceCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PieceCRUDRoutingModule { }
