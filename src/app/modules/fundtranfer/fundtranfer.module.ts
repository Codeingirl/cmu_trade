import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundtranferRoutingModule } from './fundtranfer-routing.module';
import { FundtranferComponent } from './fundtranfer.component';
import { FundtranferAutoComponent } from './fundtranfer-auto/fundtranfer-auto.component';
import { FundtranferManualComponent } from './fundtranfer-manual/fundtranfer-manual.component';


@NgModule({
  declarations: [FundtranferComponent, FundtranferAutoComponent, FundtranferManualComponent],
  imports: [
    CommonModule,
    FundtranferRoutingModule
  ]
})
export class FundtranferModule { }
