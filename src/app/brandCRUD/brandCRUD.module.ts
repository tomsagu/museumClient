import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrandCRUDRoutingModule } from './brandCRUD-routing.module';
import { BrandCRUDComponent } from './brandCRUD/brandCRUD.component';
import { BrandProvider } from 'src/providers/BrandProvider';
import { HttpModule } from '@angular/http';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  {
    path: '',
    component: BrandCRUDComponent
  }
];

@NgModule({
  declarations: [BrandCRUDComponent],
  providers: [BrandProvider],
  imports: [
    CommonModule,
    BrandCRUDRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BrandCRUDComponent
  ]
})
export class BrandCRUDModule { }
