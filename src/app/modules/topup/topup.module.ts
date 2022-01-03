import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopupRoutingModule } from './topup-routing.module';
import { TopupManualComponent } from './topup-manual/topup-manual.component';
import { TopUpAutoComponent } from './topup-auto/topup-auto.component';
import { TopUpComponent } from './topup.component';
import { DeleteTopUpModalComponent } from './components/delete-topup-modal/delete-topup-modal.component';
import { UpdateTopUpsStatusModalComponent } from './components/update-topups-status-modal/update-topups-status-modal.component';
import { FetchTopUpsModalComponent } from './components/fetch-topups-modal/fetch-topups-modal.component';
import { EditTopUpModalComponent } from './components/edit-topup-modal/edit-topup-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteTopUpsModalComponent } from './components/delete-topups-modal/delete-topups-modal.component';


@NgModule({
  declarations: [TopupManualComponent, 
    TopUpAutoComponent, 
    TopUpComponent,
    DeleteTopUpsModalComponent,
    DeleteTopUpModalComponent,
    UpdateTopUpsStatusModalComponent,
    FetchTopUpsModalComponent,
    EditTopUpModalComponent],
  imports: [
    CommonModule,
    TopupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    DeleteTopUpsModalComponent,
    DeleteTopUpModalComponent,
    UpdateTopUpsStatusModalComponent,
    FetchTopUpsModalComponent,
    EditTopUpModalComponent,
  ]
})
export class TopupModule { }
