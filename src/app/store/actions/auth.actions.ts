import { createAction, union } from '@ngrx/store';

export const signOut = createAction(
  '[Auth] sign out'
);

export const signOutCompleted = createAction(
  '[Auth] sign out completed'
);

const actions = union({
  signOut,
  signOutCompleted
});

export type AuthActions = typeof actions;
