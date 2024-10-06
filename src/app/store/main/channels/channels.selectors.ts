import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ChannelsState } from './channels.reducer';

export const selectChannelsState =
  createFeatureSelector<ChannelsState>('channels');

export const selectChannels = createSelector(
  selectChannelsState,
  (state: ChannelsState) => state.channels,
);

export const selectActiveChannel = createSelector(
  selectChannelsState,
  (state: ChannelsState) => state.activeChannel,
);
