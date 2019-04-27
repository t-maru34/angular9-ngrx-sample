import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthActions, signOut, signOutCompleted } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  signOut$ = this.actions$.pipe(
    ofType(signOut.type),
    exhaustMap(() => {
      console.log('sign out effect');
      // TODO: sign out logic
      return of(signOutCompleted());
    })
  );

  constructor(private actions$: Actions<AuthActions>) {}
}
