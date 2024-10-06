import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthEffects } from './store/auth/auth.effects';
import { ChannelsEffects } from './store/main/channels/channels.effects';
import { UsersEffects } from './store/main/users/users.effects';
import { ChatEffects } from './store/chat/chat.effects';
import { authReducer } from './store/auth/auth.reducer';
import { channelsReducer } from './store/main/channels/channels.reducer';
import { usersReducer } from './store/main/users/users.reducer';
import { chatReducer } from './store/chat/chat.reducer';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
      auth: authReducer,
      channels: channelsReducer,
      users: usersReducer,
      chat: chatReducer,
    }),
    provideEffects([AuthEffects, ChannelsEffects, UsersEffects, ChatEffects]),
    provideHttpClient(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
