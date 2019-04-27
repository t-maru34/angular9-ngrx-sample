import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './store/reducers';
import { filter } from 'rxjs/operators';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';

import { InformationDialogComponent, InformationDialogData } from './components/information-dialog/information-dialog.component';
import { getMessageEvent } from './store/selectors/message.selector';
import { MessageType, AppMessageEvent, DisplayType } from './models/message-event';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular7-ngrx-sample';
  messageSubscription: Subscription;

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog, private store: Store<AppState>) {}

  ngOnInit() {
    this.subscribeMessageEvent();
  }

  ngOnDestroy() {
    if (this.messageSubscription) this.messageSubscription.unsubscribe();
  }

  private subscribeMessageEvent() {
    this.messageSubscription = this.store
      .pipe(
        select(getMessageEvent),
        filter(it => it != null)
      )
      .subscribe(event => {
        switch (event.type) {
          case MessageType.INFO:
            this.showInfoMessage(event);
            break;

          case MessageType.ERROR:
            this.showErrorMessage(event);
            break;
        }
      });
  }

  showInfoMessage(event: AppMessageEvent) {
    switch (event.displayType) {
      case DisplayType.SNACK_BAR:
        this.openSnackBar(event.message);
        break;

      case DisplayType.DIALOG:
        const title = 'Information';
        this.openDialog(title, event.message);
        break;
    }
  }

  showErrorMessage(event: AppMessageEvent) {
    switch (event.displayType) {
      case DisplayType.SNACK_BAR:
        this.openSnackBar(event.message);
        break;

      case DisplayType.DIALOG:
        const title = 'Error';
        this.openDialog(title, event.message);
        break;
    }
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 3000 });
  }

  openDialog(title: string, body: string) {
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
}
