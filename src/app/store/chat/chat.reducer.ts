import { createReducer, on } from '@ngrx/store';
import {
  sendMessage,
  sendMessageSuccess,
  sendMessageFailure,
  clearChatFailure,
  clearChat,
  clearChatSuccess,
} from './chat.actions';
import { MessageModel } from '../../shared/models/message.model';
import { ChannelModel } from '../../shared/models/channel.model';

export interface MessagesState {
  activeChannel: ChannelModel;
  messages: MessageModel[];
}

export const initialState: MessagesState = {
  activeChannel: new ChannelModel(),
  messages: [],
};

export const chatReducer = createReducer(
  initialState,
  on(sendMessage, (state) => ({ ...state })),
  on(sendMessageSuccess, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
  })),
  on(sendMessageFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(clearChat, (state) => ({ ...state })),
  on(clearChatSuccess, (state) => ({
    ...state,
    messages: [],
  })),
  on(clearChatFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
