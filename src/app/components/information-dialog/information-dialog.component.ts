import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InformationDialogData {
  title: string;
  body: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  leftButtonAction?: () => void;
  rightButtonAction?: () => void;
}

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.css']
})
export class InformationDialogComponent implements OnInit {
  title: string;
  body: string;
  leftButtonLabel: string;
  rightButtonLabel: string;

  constructor(
    public dialogRef: MatDialogRef<InformationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: InformationDialogData
  ) {
    this.title = data.title;
    this.body = data.body;
    this.leftButtonLabel = data.leftButtonLabel;
    this.rightButtonLabel = data.rightButtonLabel;
  }

  ngOnInit() {
  }

  onLeftClick() {
    this.dialogRef.close();
    if (this.data.leftButtonAction) this.data.leftButtonAction();
  }

  onRightClick() {
    this.dialogRef.close();
    if (this.data.rightButtonAction) this.data.rightButtonAction();
  }
}
