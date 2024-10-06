import { createReducer, on } from '@ngrx/store';
import {
  loadChannels,
  loadChannelsSuccess,
  loadChannelsFailure,
  addChannelSuccess,
  addChannel,
  addChannelFailure,
  changeChannel,
  changeChannelSuccess,
  changeChannelFailure,
} from './channels.actions';
import { ChannelModel } from '../../../shared/models/channel.model';

export interface ChannelsState {
  channels: ChannelModel[];
  activeChannel: ChannelModel;
  error: string;
}

export const initialState: ChannelsState = {
  channels: [],
  activeChannel: new ChannelModel(),
  error: '',
};

export const channelsReducer = createReducer(
  initialState,
  on(loadChannels, (state) => ({ ...state })),
  on(loadChannelsSuccess, (state, { channels }) => ({
    ...state,
    channels,
    error: '',
  })),
  on(loadChannelsFailure, (state, { error }) => ({ ...state, error })),
  on(changeChannel, (state) => ({ ...state })),
  on(changeChannelSuccess, (state, { channel }) => ({
    ...state,
    activeChannel: channel,
    error: '',
  })),
  on(changeChannelFailure, (state, { error }) => ({ ...state, error })),
  on(addChannel, (state) => ({ ...state })),
  on(addChannelSuccess, (state, { channel }) => ({
    ...state,
    channels: [...state.channels, { id: new Date().getTime(), name: channel }],
    error: '',
  })),
  on(addChannelFailure, (state, { error }) => ({ ...state, error })),
);
