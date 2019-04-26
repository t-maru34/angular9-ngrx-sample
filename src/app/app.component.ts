import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular7-ngrx-sample';

  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string) {
    this.snackBar.open(message, null, { duration: 3000 });
  }
}
