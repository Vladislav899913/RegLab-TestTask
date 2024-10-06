import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ChannelModel } from '../../../shared/models/channel.model';
import { MessageModel } from '../../../shared/models/message.model';
import { selectActiveChannel } from '../../../store/main/channels/channels.selectors';
import { selectAllMessages } from '../../../store/chat/chat.selectors';
import { sendMessage } from '../../../store/chat/chat.actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  public newMessage: string = '';

  public activeChannel$: Observable<ChannelModel>;
  public activeChannelMessages$: Observable<MessageModel[]>;

  constructor(private store: Store) {
    this.activeChannel$ = this.store.select(selectActiveChannel);
    this.activeChannelMessages$ = this.store.select(selectAllMessages);
  }

  public sendMessage(): void {
    if (this.newMessage) {
      this.store.dispatch(sendMessage({ message: this.newMessage }));
      this.newMessage = '';
    }
  }

  public trackByMessageId(index: number, message: MessageModel): number {
    return message.id;
  }
}
