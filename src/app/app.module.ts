import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DocumentationModule } from './documentation/documentation.module';
import { CollectionModule } from './collection/collection.module';
import { ArticleModule } from './article/article.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { LoginModule } from './login/login.module';
import { UserProvider } from 'src/providers/UserProvider';
import { DocumentationCRUDModule } from './documentationCRUD/documentationCRUD.module';
import { CRUDModule } from './crud/crud.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    DocumentationModule,
    CollectionModule,
    ArticleModule,
    LoginModule,
    CRUDModule
  ],
  providers: [UserProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
