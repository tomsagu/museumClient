import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRUDRoutingModule } from './crud-routing.module';
import { IndexCRUDComponent } from './indexCRUD/indexCRUD.component';
import { DocumentationCRUDModule } from '../documentationCRUD/documentationCRUD.module';
import { CollectionCRUDModule } from '../collectionCRUD/collectionCRUD.module';
import { HeaderCRUDComponent } from '../headerCRUD/headerCRUD.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [
    IndexCRUDComponent,
    HeaderCRUDComponent
  ],
  imports: [
    CommonModule,
    CRUDRoutingModule,
    DocumentationCRUDModule,
    CollectionCRUDModule
  ],
  exports: [
    IndexCRUDComponent
  ]
})
export class CRUDModule { }
