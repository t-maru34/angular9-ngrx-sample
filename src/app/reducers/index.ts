import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

import * as fromCore from './core.reducer';

export interface AppState {
  core: fromCore.State;
}

export const reducers: ActionReducerMap<AppState> = {
  core: fromCore.reducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
