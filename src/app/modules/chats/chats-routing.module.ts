import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatsComponent } from './chats.component';

import { PrivateChatComponent } from './private-chat/private-chat.component';

const routes: Routes = [
  {
    path: '',
    component: ChatsComponent,
    children: [
      {
        path: 'private-chat',
        component: PrivateChatComponent,
      },
      { path: '', redirectTo: 'private-chat', pathMatch: 'full' },
      { path: '**', redirectTo: 'private-chat', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
