import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MessagesState } from './chat.reducer';

export const selectChatState = createFeatureSelector<MessagesState>('chat');

export const selectAllMessages = createSelector(
  selectChatState,
  (state: MessagesState) => state.messages,
);
