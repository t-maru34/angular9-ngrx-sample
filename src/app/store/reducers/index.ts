import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromMessage from './message.reducer';

export interface AppState {
  message: fromMessage.State;
}

export const reducers: ActionReducerMap<AppState> = {
  message: fromMessage.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
