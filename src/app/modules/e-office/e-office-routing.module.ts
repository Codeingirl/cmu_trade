import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement/announcement.component';
import { CommandletterComponent } from './commandletter/commandletter.component';
import { DeliveryletterComponent } from './deliveryletter/deliveryletter.component';
import { EOfficeComponent } from './e-office.component';
import { LhcComponent } from './lhc/lhc.component';
import { MemoComponent } from './memo/memo.component';
import { ReceiveletterComponent } from './receiveletter/receiveletter.component';

const routes: Routes = [
  {
    path: '',
    component: EOfficeComponent,
    children: [
      {
        path: 'receiveletter',
        component: ReceiveletterComponent,
      },
      {
        path: 'deliveryletter',
        component: DeliveryletterComponent,
      },
      {
        path: 'commandletter',
        component: CommandletterComponent,
      },
      {
        path: 'announcement',
        component: AnnouncementComponent,
      },
      {
        path: 'memo',
        component: MemoComponent,
      },
      {
        path: 'lhc',
        component: LhcComponent,
      },
      { path: '', redirectTo: 'receiveletter', pathMatch: 'full' },
      { path: '**', redirectTo: 'receiveletter', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EOfficeRoutingModule { }
