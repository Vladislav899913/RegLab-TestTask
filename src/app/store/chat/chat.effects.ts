import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  clearChat,
  clearChatFailure,
  clearChatSuccess,
  sendMessage,
  sendMessageFailure,
  sendMessageSuccess,
} from './chat.actions';
import { ChatService } from '../../components/main/chat/services/chat.service';
import { MessageModel } from '../../shared/models/message.model';

@Injectable()
export class ChatEffects {
  private actions$ = inject(Actions);

  constructor(private chatService: ChatService) {}

  sendMessage = createEffect(() =>
    this.actions$.pipe(
      ofType(sendMessage),
      mergeMap((action) =>
        this.chatService.sendMessage(action.message).pipe(
          map((message: MessageModel) => sendMessageSuccess({ message })),
          catchError(() =>
            of(sendMessageFailure({ error: 'Invalid send message' })),
          ),
        ),
      ),
    ),
  );

  clearChat = createEffect(() =>
    this.actions$.pipe(
      ofType(clearChat),
      mergeMap(() =>
        this.chatService.clearChat().pipe(
          map(() => clearChatSuccess()),
          catchError(() =>
            of(clearChatFailure({ error: 'Invalid clear chat' })),
          ),
        ),
      ),
    ),
  );
}
