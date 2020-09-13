import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import * as CoreActions from 'src/app/actions/core.actions';
import { DisplayType } from 'src/app/models/message-event';
import {
  InformationDialogData,
  InformationDialogComponent
} from 'src/app/views/presentations/information-dialog/information-dialog.component';

@Injectable()
export class CoreEffects {
  dispatchInfoMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.dispatchInfoMessage),
        tap(action => {
          switch (action.displayType) {
            case DisplayType.SNACK_BAR:
              this.openSnackBar(action.message);
              break;
            case DisplayType.DIALOG:
              this.openDialog('Information', action.message);
              break;
          }
        })
      ),
    { dispatch: false }
  );

  dispatchErrorMessage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CoreActions.dispatchErrorMessage),
        tap(action => {
          switch (action.displayType) {
            case DisplayType.SNACK_BAR:
              this.openSnackBar(action.message || action.error.message);
              break;
            case DisplayType.DIALOG:
              this.openDialog('Error', action.message || action.error.message);
              break;
          }
        })
      ),
    { dispatch: false }
  );

  private openSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 3000 });
  }

  private openDialog(title: string, body: string) {
    const data: InformationDialogData = {
      title,
      body,
      rightButtonLabel: 'CLOSE'
    };
    const dialogConfig: MatDialogConfig = {
      maxWidth: '70vw',
      maxHeight: '70vh',
      minWidth: '300px',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      data
    };
    this.dialog.open(InformationDialogComponent, dialogConfig);
  }

  constructor(private actions$: Actions, private snackBar: MatSnackBar, private dialog: MatDialog) {}
}
