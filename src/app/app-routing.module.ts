import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { DocumentationModule } from './documentation/documentation.module';
import { CollectionModule } from './collection/collection.module';
import { ArticleModule } from './article/article.module';
import { PieceModule } from './piece/piece.module';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
