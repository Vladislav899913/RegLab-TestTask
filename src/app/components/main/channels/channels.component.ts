import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { ChannelModel } from '../../../shared/models/channel.model';
import { UserModel } from '../../../shared/models/user.model';
import { selectChannels } from '../../../store/main/channels/channels.selectors';
import { selectCurrentUser } from '../../../store/auth/auth.selectors';
import { loadChannels } from '../../../store/main/channels/channels.actions';
import { clearChat } from '../../../store/chat/chat.actions';
import {
  addChannel,
  changeChannel,
} from '../../../store/main/channels/channels.actions';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrl: './channels.component.scss',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsComponent {
  public currentUser$: Observable<UserModel>;
  public channels$: Observable<ChannelModel[]>;

  constructor(private store: Store) {
    this.currentUser$ = this.store.select(selectCurrentUser);
    this.channels$ = this.store.select(selectChannels);
    this.loadChannels();
  }

  public loadChannels(): void {
    this.currentUser$.pipe(take(1)).subscribe((user) => {
      this.store.dispatch(loadChannels({ user }));
    });
  }

  public changeChannel($event: ChannelModel): void {
    this.store.dispatch(changeChannel({ channel: $event }));
    this.store.dispatch(clearChat());
  }

  public addChannel(): void {
    const res: string = prompt('Введите название канала') || '';

    if (res) {
      this.store.dispatch(addChannel({ channel: res }));
    }
  }

  public trackByChannelId(index: number, channel: ChannelModel): number {
    return channel.id;
  }
}
