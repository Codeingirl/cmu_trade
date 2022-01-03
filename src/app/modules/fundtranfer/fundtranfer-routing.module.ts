import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundtranferAutoComponent } from './fundtranfer-auto/fundtranfer-auto.component';
import { FundtranferManualComponent } from './fundtranfer-manual/fundtranfer-manual.component';
import { FundtranferComponent } from './fundtranfer.component';

const routes: Routes = [
  {
    path: '',
    component: FundtranferComponent,
    children: [
      {
        path: 'fundtranfer',
        component: FundtranferComponent,
      },
      {
        path: 'fundtranfer-auto',
        component: FundtranferAutoComponent,
      },
      {
        path: 'fundtranfer-manual',
        component: FundtranferManualComponent,
      },
      { path: '', redirectTo: 'fundtranfer', pathMatch: 'full' },
      { path: '**', redirectTo: 'fundtranfer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundtranferRoutingModule { }
