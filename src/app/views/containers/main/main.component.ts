import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Store } from '@ngrx/store';

import { InformationDialogData, InformationDialogComponent } from '../../presentations/information-dialog/information-dialog.component';
import { AppState } from 'src/app/reducers';
import { signOut } from 'src/app/actions/auth.actions';
import { RoutingPathResolver } from 'src/app/app-routing-path-resolver';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
  }

  signOut() {
    const action = () => {
      this.store.dispatch(signOut());
      this.router.navigate([RoutingPathResolver.resolveSignIn()]);
    };
    const data: InformationDialogData = {
      title: 'Sign out',
      body: 'Do you want to sign out?',
      leftButtonLabel: 'CLOSE',
      rightButtonLabel: 'SIGN OUT',
      rightButtonAction: action
    };
    const dialogConfig: MatDialogConfig = {
      minWidth: '300px',
      panelClass: 'custom-dialog-container',
      autoFocus: false,
      data
    };
    this.dialog.open(InformationDialogComponent, dialogConfig);
  }
}
