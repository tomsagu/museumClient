import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { DocumentationModule } from './documentation/documentation.module';
import { CollectionModule } from './collection/collection.module';
import { ArticleModule } from './article/article.module';
import { PieceModule } from './piece/piece.module';
import { PieceCRUDModule } from './pieceCRUD/pieceCRUD.module';

import { LoginModule } from './login/login.module';
import { AdminGuard } from 'src/guards/AdminGuard';
import { UserProvider } from 'src/providers/UserProvider';
import { DocumentationCRUDModule } from './documentationCRUD/documentationCRUD.module';

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
    path: 'documentationCRUD',
    loadChildren: () => DocumentationCRUDModule,
    canActivate: [AdminGuard] 
  },
  {
    path: 'collection/:id',
    loadChildren: () => CollectionModule
  },
  {
    path: 'pieceCRUD',
    loadChildren: () => PieceCRUDModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : [UserProvider,AdminGuard]
})
export class AppRoutingModule { }
