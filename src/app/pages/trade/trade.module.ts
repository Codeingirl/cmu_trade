import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [TradeComponent],
  imports: [
    CommonModule,
    TradeRoutingModule,
    NgApexchartsModule,
    NgbModule
  ],
  bootstrap: [TradeComponent],
})
export class TradeModule { }
