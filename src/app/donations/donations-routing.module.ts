import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';

const routes: Routes = [
  {
    path: '',
    component: DonationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationsRoutingModule { }
