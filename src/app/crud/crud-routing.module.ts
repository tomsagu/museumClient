import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexCRUDComponent } from './indexCRUD/indexCRUD.component';
import { BrandCRUDComponent } from '../brandCRUD/brandCRUD/brandCRUD.component';
import { TypeCRUDComponent } from '../typeCRUD/typeCRUD/typeCRUD.component';
import { RoomCRUDComponent } from '../roomCRUD/roomCRUD/roomCRUD.component';
import { PieceCRUDComponent } from '../pieceCRUD/pieceCRUD/pieceCRUD.component';

const routes: Routes = [
  {
    path: '',
    component: IndexCRUDComponent
  }/*
  { path: '', redirectTo: '/indexCRUD', pathMatch: 'full' },
  {
    path: 'indexCRUD',
    component: IndexCRUDComponent
  },
  { path: 'pieceCRUD', component:  PieceCRUDComponent},
  { path: 'brandCRUD', component:  BrandCRUDComponent},
  { path: 'typeCRUD', component:  TypeCRUDComponent},
  { path: 'roomCRUD', component: RoomCRUDComponent},*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRUDRoutingModule { }
