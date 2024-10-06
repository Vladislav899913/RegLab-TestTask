import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from './users.reducer';

export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users,
);

/*export const selectMessages = createSelector(
  selectChatState,
  (state: ChatState) => state.chat,
);*/
