import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManualRoutingModule } from './manual-routing.module';
import { ManualComponent } from './manual/manual.component';

@NgModule({
  declarations: [ManualComponent],
  imports: [
    CommonModule,
    ManualRoutingModule
  ]
})
export class ManualModule { }
