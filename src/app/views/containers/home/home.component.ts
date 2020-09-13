import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/reducers';
import { dispatchInfoMessage, dispatchErrorMessage } from 'src/app/actions/core.actions';
import { DisplayType } from 'src/app/models/message-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  showInfoWithSnackBar() {
    this.store.dispatch(dispatchInfoMessage({ displayType: DisplayType.SNACK_BAR, message: 'Information message' }));
  }

  showInfoWithDialog() {
    this.store.dispatch(dispatchInfoMessage({ displayType: DisplayType.DIALOG, message: 'Information message' }));
  }

  showErrorWithSnackBar() {
    this.store.dispatch(
      dispatchErrorMessage({ displayType: DisplayType.SNACK_BAR, error: new Error('Error message') })
    );
  }

  showErrorWithDialog() {
    this.store.dispatch(
      dispatchErrorMessage({
        displayType: DisplayType.DIALOG,
        error: new Error('Error message'),
        message: 'Error summary'
      })
    );
  }
}
