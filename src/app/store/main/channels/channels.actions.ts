import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../../shared/models/user.model';
import { ChannelModel } from '../../../shared/models/channel.model';

export const loadChannels = createAction(
  '[Channels] Load Channels',
  props<{ user: UserModel }>(),
);

export const loadChannelsSuccess = createAction(
  '[Channels] Load Channels Success',
  props<{ channels: ChannelModel[] }>(),
);

export const loadChannelsFailure = createAction(
  '[Channels] Load Channels Failure',
  props<{ error: string }>(),
);

export const changeChannel = createAction(
  '[Channels] Change Channel',
  props<{ channel: ChannelModel }>(),
);

export const changeChannelSuccess = createAction(
  '[Channels] Change Success',
  props<{ channel: ChannelModel }>(),
);

export const changeChannelFailure = createAction(
  '[Channels] Change Channel Failure',
  props<{ error: string }>(),
);

export const addChannel = createAction(
  '[Channels] Add Channel',
  props<{ channel: string }>(),
);

export const addChannelSuccess = createAction(
  '[Channels] Add Channel Success',
  props<{ channel: string }>(),
);

export const addChannelFailure = createAction(
  '[Channels] Add Channel Failure',
  props<{ error: string }>(),
);

