import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

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
import { JWTProvider } from 'src/providers/JWTProvider';

import { MaintenanceDocumentationModule } from './maintenanceDocumentation/maintenanceDocumentation.module';
import { MaintenanceArticleDialogModule } from './maintenanceArticleDialog/maintenanceArticleDialog.module';
import { ConfirmDeleteDialogModule } from './confirmDeleteDialog/confirmDeleteDialog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MaintenanceTypeModule } from './maintenanceType/maintenanceType.module';
import { MaintenanceRoomModule } from './maintenanceRoom/maintenanceRoom.module';
import { DonationsModule } from './donations/donations.module';
import { AboutModule } from './about/about.module';
import {MapModule} from './map/map.module';
import { ManualModule } from './manual/manual.module';
import { from } from 'rxjs';

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
    MaintenanceDocumentationModule,
    MaintenanceArticleDialogModule,
    MaintenanceTypeModule,
    MaintenanceRoomModule,
    ConfirmDeleteDialogModule,
    BrowserAnimationsModule,
    DonationsModule,
    AboutModule,
    MapModule,
    ManualModule,
    ToastrModule.forRoot()
  ],
  providers: [UserProvider,JWTProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
