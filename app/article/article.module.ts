import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent
  }
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticleModule { }
