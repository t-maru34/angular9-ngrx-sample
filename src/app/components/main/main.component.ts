import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InformationDialogData, InformationDialogComponent } from '../information-dialog/information-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  signOut() {
    const action = () => console.log('sign out action');
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
