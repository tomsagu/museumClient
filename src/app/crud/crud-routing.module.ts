import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCRUDComponent } from './indexCRUD/indexCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: IndexCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
