import { createAction, props } from '@ngrx/store';
import { DisplayType } from 'src/app/models/message-event';

export const dispatchInfoMessage = createAction(
  '[Core] dispatch info message',
  props<{ displayType: DisplayType; message: string }>()
);

export const dispatchErrorMessage = createAction(
  '[Core] dispatch error message',
  props<{ displayType: DisplayType; error: Error; message?: string }>()
);
