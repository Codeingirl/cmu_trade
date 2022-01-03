import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EOfficeRoutingModule } from './e-office-routing.module';
import { EOfficeComponent } from './e-office.component';
import { ReceiveletterComponent } from './receiveletter/receiveletter.component';
import { DeliveryletterComponent } from './deliveryletter/deliveryletter.component';
import { CommandletterComponent } from './commandletter/commandletter.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { MemoComponent } from './memo/memo.component';
import { LhcComponent } from './lhc/lhc.component';

import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [EOfficeComponent, ReceiveletterComponent, DeliveryletterComponent, CommandletterComponent, AnnouncementComponent, MemoComponent, LhcComponent],
  imports: [
    CommonModule,
    EOfficeRoutingModule,
    NgApexchartsModule
  ]
})
export class EOfficeModule { }
