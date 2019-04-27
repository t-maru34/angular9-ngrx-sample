import { AppMessageEvent, MessageType } from 'src/app/models/message-event';
import { MessageActions, dispatchInfoMessage, dispatchErrorMessage } from '../actions/message.actions';

export interface State {
  messageEvent: AppMessageEvent | null;
}

export const initialState: State = {
  messageEvent: null
};

export function reducer(state = initialState, action: MessageActions): State {
  switch (action.type) {
    case dispatchInfoMessage.type:
      const infoEvent: AppMessageEvent = {
        type: MessageType.INFO,
        displayType: action.displayType,
        message: action.message
      };
      return { ...state, messageEvent: infoEvent };

    case dispatchErrorMessage.type:
      const errEvent: AppMessageEvent = {
        type: MessageType.ERROR,
        displayType: action.displayType,
        message: action.message ? action.message : action.error.message
      };
      return { ...state, messageEvent: errEvent };

    default:
      return state;
  }
}
