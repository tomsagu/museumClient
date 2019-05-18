import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandCRUDComponent } from './brandCRUD/brandCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: BrandCRUDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandCRUDRoutingModule { }
