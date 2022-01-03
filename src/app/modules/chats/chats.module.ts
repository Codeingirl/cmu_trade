import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { ChatsComponent } from './chats.component';
import { ChatInnerComponent } from './chat-inner/chat-inner.component';



@NgModule({
  declarations: [ChatsComponent,PrivateChatComponent,ChatInnerComponent],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
