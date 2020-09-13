import { Action, createReducer, on } from '@ngrx/store';

import * as CoreActions from '../actions/core.actions';

export const coreFeatureKey = 'core';

export interface State {}

export const initialState: State = {};

const coreReducer = createReducer(initialState);

export function reducer(state: State | undefined, action: Action) {
  return coreReducer(state, action);
}
