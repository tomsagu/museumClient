import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations/donations.component';

import { PieceProvider } from 'src/providers/PieceProvider';

@NgModule({
  declarations: [DonationsComponent],
  providers: [PieceProvider],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    HttpModule
  ]
})
export class DonationsModule { }
