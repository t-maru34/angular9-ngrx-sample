import { createAction, union } from '@ngrx/store';
import { AppMessageEvent, DisplayType } from 'src/app/models/message-event';


export const dispatchInfoMessage = createAction(
  '[Message] dispatch info message',
  (displayType: DisplayType, message: string) => ({ displayType, message })
);

export const dispatchErrorMessage = createAction(
  '[Message] dispatch error message',
  (displayType: DisplayType, error: Error, message?: string) => ({ displayType, error, message })
);

const actions = union({
  dispatchInfoMessage,
  dispatchErrorMessage
});

export type MessageActions = typeof actions;
