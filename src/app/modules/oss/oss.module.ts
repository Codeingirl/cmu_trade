import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OssRoutingModule } from './oss-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { OssComponent } from './oss.component';
import { NgApexchartsModule } from "ng-apexcharts";

@NgModule({
  declarations: [OssComponent, ChartsComponent],
  imports: [
    CommonModule,
    OssRoutingModule,
    NgApexchartsModule
  ]
})
export class OssModule { }
