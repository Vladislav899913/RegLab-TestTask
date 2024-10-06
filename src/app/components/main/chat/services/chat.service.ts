import { Injectable } from '@angular/core';
import { Observable, first, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { MessageModel } from '../../../../shared/models/message.model';
import { UserModel } from '../../../../shared/models/user.model';
import { ChannelModel } from '../../../../shared/models/channel.model';
import { selectCurrentUser } from '../../../../store/auth/auth.selectors';
import { selectActiveChannel } from '../../../../store/main/channels/channels.selectors';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private store: Store) {}

  public sendMessage(message: string): Observable<MessageModel> {
    let currentUser: UserModel = new UserModel();
    let channelId: number = 0;

    this.store
      .select(selectCurrentUser)
      .pipe(first())
      .subscribe((value: UserModel) => {
        currentUser = value;
      });

    this.store
      .select(selectActiveChannel)
      .pipe(first())
      .subscribe((value: ChannelModel) => {
        channelId = value.id;
      });

    return of({
      id: new Date().getTime(),
      fromUser: currentUser,
      channelId,
      content: message,
    });
  }

  public clearChat(): Observable<[]> {
    return of([]);
  }
}
