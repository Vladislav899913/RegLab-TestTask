import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import {
  loadChannels,
  loadChannelsSuccess,
  loadChannelsFailure,
  addChannel,
  changeChannel,
  addChannelSuccess,
  addChannelFailure,
  changeChannelSuccess,
  changeChannelFailure,
} from './channels.actions';
import { ChannelsService } from '../../../components/main/channels/services/channels.service';
import { ChannelModel } from '../../../shared/models/channel.model';

@Injectable()
export class ChannelsEffects {
  constructor(
    private actions$: Actions,
    private channelsService: ChannelsService,
  ) {}

  getChannels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChannels),
      mergeMap((action) =>
        this.channelsService.getChannels(action.user).pipe(
          map((channels: ChannelModel[]) => loadChannelsSuccess({ channels })),
          catchError(() =>
            of(loadChannelsFailure({ error: 'Failed to load channels' })),
          ),
        ),
      ),
    ),
  );

  changeChannel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeChannel),
      mergeMap((action) =>
        this.channelsService.changeChannel(action.channel).pipe(
          map((channel: ChannelModel) => changeChannelSuccess({ channel })),
          catchError(() =>
            of(changeChannelFailure({ error: 'Failed to change channel' })),
          ),
        ),
      ),
    ),
  );

  addChannel$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addChannel),
      mergeMap((action) =>
        this.channelsService.addChannel(action.channel).pipe(
          map((channel: string) => addChannelSuccess({ channel })),
          catchError(() =>
            of(addChannelFailure({ error: 'Failed to add channel' })),
          ),
        ),
      ),
    ),
  );
}
