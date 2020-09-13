import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  signOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signOut),
      exhaustMap(() => {
        console.log('sign out effect');
        // TODO: sign out logic
        return of(AuthActions.signOutCompleted());
      })
    )
  );

  constructor(private actions$: Actions) {}
}
