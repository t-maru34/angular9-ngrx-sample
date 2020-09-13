import { createSelector, createFeatureSelector } from '@ngrx/store';

import { State, coreFeatureKey } from '../reducers/core.reducer';

const selectCoreState = createFeatureSelector<State>(coreFeatureKey);
