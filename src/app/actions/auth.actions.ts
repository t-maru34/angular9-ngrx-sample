import { createAction } from '@ngrx/store';

export const signOut = createAction('[Auth] sign out');

export const signOutCompleted = createAction('[Auth] sign out completed');
