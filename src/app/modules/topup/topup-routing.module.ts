import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopUpAutoComponent } from './topup-auto/topup-auto.component';
import { TopupManualComponent } from './topup-manual/topup-manual.component';
import { TopUpComponent } from './topup.component';

const routes: Routes = [
  {
    path: '',
    component: TopUpComponent,
    children: [
      {
        path: 'topup',
        component: TopUpComponent,
      },
      {
        path: 'topup-auto',
        component: TopUpAutoComponent,
      },
      {
        path: 'topup-manual',
        component: TopupManualComponent,
      },
      { path: '', redirectTo: 'topup', pathMatch: 'full' },
      { path: '**', redirectTo: 'topup', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopupRoutingModule { }
