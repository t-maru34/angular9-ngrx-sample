import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoreEffects } from './core.effects';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

describe('CoreEffects', () => {
  let actions$: Observable<any>;
  let effects: CoreEffects;

  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const snackbarSpyDef = jasmine.createSpyObj('snackBar', ['open']);
    const dialogSpyDef = jasmine.createSpyObj('dialog', ['open']);

    TestBed.configureTestingModule({
      providers: [
        CoreEffects,
        provideMockActions(() => actions$),
        { provide: MatSnackBar, useValue: snackbarSpyDef },
        { provide: MatDialog, useValue: dialogSpyDef }
      ]
    });

    effects = TestBed.inject(CoreEffects);
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
