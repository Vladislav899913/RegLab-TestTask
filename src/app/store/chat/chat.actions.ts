import { createAction, props } from '@ngrx/store';
import { MessageModel } from '../../shared/models/message.model';

export const sendMessage = createAction(
  '[Message] Send Message',
  props<{ message: string }>(),
);

export const sendMessageSuccess = createAction(
  '[Message] Send Message Success',
  props<{ message: MessageModel }>(),
);

export const sendMessageFailure = createAction(
  '[Message] Send Message Failure',
  props<{ error: string }>(),
);

export const clearChat = createAction('[Message] Clear Chat');

export const clearChatSuccess = createAction('[Message] Clear Chat Success');

export const clearChatFailure = createAction(
  '[Message] Clear Chat Failure',
  props<{ error: string }>(),
);
