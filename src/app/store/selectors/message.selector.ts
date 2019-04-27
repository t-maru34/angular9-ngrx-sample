import { createSelector } from '@ngrx/store';

import { getMessageState } from './index';

export const getMessageEvent = createSelector(
  getMessageState,
  (messageState) => messageState.messageEvent
);
