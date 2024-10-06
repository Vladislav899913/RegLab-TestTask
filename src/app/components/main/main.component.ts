import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ChannelsComponent } from './channels/channels.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [ProfileComponent, ChannelsComponent, UsersComponent, ChatComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
