import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MembersComponent } from './members.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
    children: [
      {
        path: 'members',
        component: MemberListComponent,
      },
      {
        path: 'add-member',
        component: AddMemberComponent,
      },
      { path: '', redirectTo: 'members', pathMatch: 'full' },
      { path: '**', redirectTo: 'members', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
