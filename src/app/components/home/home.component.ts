import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { dispatchInfoMessage, dispatchErrorMessage } from 'src/app/store/actions/message.actions';
import { DisplayType } from 'src/app/models/message-event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  showInfoWithSnackBar() {
    this.store.dispatch(dispatchInfoMessage(DisplayType.SNACK_BAR, 'Information message'));
  }

  showInfoWithDialog() {
    this.store.dispatch(dispatchInfoMessage(DisplayType.DIALOG, 'Information message'));
  }

  showErrorWithSnackBar() {
    this.store.dispatch(dispatchErrorMessage(DisplayType.SNACK_BAR, new Error('Error message')));
  }

  showErrorWithDialog() {
    this.store.dispatch(dispatchErrorMessage(DisplayType.DIALOG, new Error('Error message'), 'Error summary'));
  }
}
