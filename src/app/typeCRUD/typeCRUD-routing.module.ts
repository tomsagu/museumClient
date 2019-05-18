import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeCRUDComponent } from './typeCRUD/typeCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: TypeCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeCRUDRoutingModule { }
