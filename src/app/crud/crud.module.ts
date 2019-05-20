import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { IndexCRUDComponent } from './indexCRUD/indexCRUD.component';
import { DocumentationCRUDModule } from '../documentationCRUD/documentationCRUD.module';
import { HeaderCRUDComponent } from '../headerCRUD/headerCRUD.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { BrandCRUDModule } from '../brandCRUD/brandCRUD.module';
import { TypeCRUDModule } from '../typeCRUD/typeCRUD.module';
import { RoomCRUDModule } from '../roomCRUD/roomCRUD.module';
import { PieceCRUDModule } from '../pieceCRUD/pieceCRUD.module';

@NgModule({
  declarations: [
    IndexCRUDComponent,
    HeaderCRUDComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    DocumentationCRUDModule,
    BrandCRUDModule,
    TypeCRUDModule,
    RoomCRUDModule,
    PieceCRUDModule
  ],
  exports: [
    IndexCRUDComponent
  ]
})
export class CRUDModule { }
