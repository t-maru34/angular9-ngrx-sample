import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State, authFeatureKey } from '../reducers/auth.reducer';

const selectAuthState = createFeatureSelector<State>(authFeatureKey);
