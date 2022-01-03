import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteMembersModalComponent } from './components/delete-members-modal/delete-members-modal.component';
import { DeleteMemberModalComponent } from './components/delete-member-modal/delete-member-modal.component';
import { UpdateMembersStatusModalComponent } from './components/update-members-status-modal/update-members-status-modal.component';
import { FetchMembersModalComponent } from './components/fetch-members-modal/fetch-members-modal.component';
import { EditMembersModalComponent } from './components/edit-members-modal/edit-members-modal.component';

@NgModule({
  declarations: [MembersComponent, AddMemberComponent, MemberListComponent,
    DeleteMemberModalComponent,
    DeleteMembersModalComponent,
    UpdateMembersStatusModalComponent,
    FetchMembersModalComponent,
    EditMembersModalComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    DeleteMemberModalComponent,
    DeleteMembersModalComponent,
    UpdateMembersStatusModalComponent,
    FetchMembersModalComponent,
    EditMembersModalComponent,
  ]
})
export class MembersModule { }
