import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { UserManagementComponent } from './user-management.component';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { CRUDTableModule } from 'src/app/_metronic/shared/crud-table';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteUserModalComponent } from './components/delete-user-modal/delete-user-modal.component';
import { DeleteUsersModalComponent } from './components/delete-users-modal/delete-users-modal.component';
import { UpdateUsersStatusModalComponent } from './components/update-users-status-modal/update-users-status-modal.component';
import { FetchUsersModalComponent } from './components/fetch-users-modal/fetch-users-modal.component';
import { EditUsersModalComponent } from './components/edit-users-modal/edit-users-modal.component';

@NgModule({
  declarations: [UsersComponent, RolesComponent, UserManagementComponent,
    DeleteUserModalComponent,
    DeleteUsersModalComponent,
    UpdateUsersStatusModalComponent,
    FetchUsersModalComponent,
    EditUsersModalComponent],
  imports: [CommonModule, UserManagementRoutingModule, FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule],
  entryComponents: [
    DeleteUserModalComponent,
    DeleteUsersModalComponent,
    UpdateUsersStatusModalComponent,
    FetchUsersModalComponent,
    EditUsersModalComponent,
    ]
})
export class UserManagementModule { }
