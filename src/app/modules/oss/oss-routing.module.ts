import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OssComponent } from './oss.component';
import { ChartsComponent } from './charts/charts.component';

const routes: Routes = [
  {
    path: '',
    component: OssComponent,
    children: [
      {
        path: 'charts',
        component: ChartsComponent,
      },
      { path: '', redirectTo: 'charts', pathMatch: 'full' },
      { path: '**', redirectTo: 'charts', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OssRoutingModule { }
