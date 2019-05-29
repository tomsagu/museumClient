import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations/donations.component';

@NgModule({
  declarations: [DonationsComponent],
  imports: [
    CommonModule,
    DonationsRoutingModule
  ]
})
export class DonationsModule { }
