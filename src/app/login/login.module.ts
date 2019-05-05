import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserProvider } from 'src/providers/UserProvider';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from 'src/app/header/header.component';

import { HttpModule } from '@angular/http';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent],
  providers: [UserProvider,HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
