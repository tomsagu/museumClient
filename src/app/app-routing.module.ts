import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { DocumentationModule } from './documentation/documentation.module';
import { CollectionModule } from './collection/collection.module';
import { ArticleModule } from './article/article.module';
import { PieceModule } from './piece/piece.module';
import { PieceCRUDModule } from './pieceCRUD/pieceCRUD.module';
import { MaintenancePieceModule } from './maintenancePiece/maintenancePiece.module';

import { LoginModule } from './login/login.module';
import { AdminGuard } from 'src/guards/AdminGuard';
import { UserProvider } from 'src/providers/UserProvider';
import { CRUDModule } from './crud/crud.module';
import { MaintenanceDocumentationModule } from './maintenanceDocumentation/maintenanceDocumentation.module';
import { BrandCRUDModule } from './brandCRUD/brandCRUD.module';
import { MaintenanceTypeModule } from './maintenanceType/maintenanceType.module';
import { TypeCRUDModule } from './typeCRUD/typeCRUD.module';
import { RoomCRUDModule } from './roomCRUD/roomCRUD.module';
import { MaintenanceRoomModule } from './maintenanceRoom/maintenanceRoom.module';
import { MaintenanceBrandModule } from './maintenanceBrand/maintenanceBrand.module';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
   },
   {
     path: 'home',
     loadChildren: () => HomeModule 
   },
   {
    path: 'documentation',
    loadChildren: () => DocumentationModule 
  },
   {
    path: 'collection',
    loadChildren: () => CollectionModule
  },
  {
    path: 'documentation/article/:id',
    loadChildren: () => ArticleModule
  },
  {
    path: 'collection/piece/:id',
    loadChildren: () => PieceModule
  },
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'indexCRUD',
    loadChildren: () => CRUDModule,
    canActivate: [AdminGuard]
  },
  {
    path: 'indexCRUD/maintenanceDocumentation/:id/:inMode',
    loadChildren: () => MaintenanceDocumentationModule,
    canActivate: [AdminGuard]
  },
  {
    path: 'collection/:id',
    loadChildren: () => CollectionModule
  },
  {
    path: 'pieceCRUD',
    loadChildren: () => PieceCRUDModule,
    canActivate: [AdminGuard] 
  },
  {
    path: 'indexCRUD/maintenancePiece/:id/:inMode',
    loadChildren: () => MaintenancePieceModule,
    canActivate: [AdminGuard]
  },
  {
    path: 'brandCRUD',
    loadChildren: () => BrandCRUDModule,
    canActivate: [AdminGuard] 
  },
  {
    path: 'indexCRUD/maintenanceBrand/:id/:inMode',
    loadChildren: () => MaintenanceBrandModule,
    canActivate: [AdminGuard]
  },
  {
    path: 'typeCRUD',
    loadChildren: () => TypeCRUDModule,
    canActivate: [AdminGuard] 
  },
  {
    path: 'indexCRUD/maintenanceType/:id/:inMode',
    loadChildren: () => MaintenanceTypeModule,
    canActivate: [AdminGuard]
  },
  {
    path: 'roomCRUD',
    loadChildren: () => RoomCRUDModule,
    canActivate: [AdminGuard] 
  },
  {
    path: 'indexCRUD/maintenanceRoom/:id/:inMode',
    loadChildren: () => MaintenanceRoomModule,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [UserProvider,AdminGuard]
})
export class AppRoutingModule { }
