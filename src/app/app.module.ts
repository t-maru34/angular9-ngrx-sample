import { NgModule } from '@angular/core';

// Modules
import { AppRoutingModule } from './app-routing.module';
import { AppUiModule } from './app-ui.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { CoreEffects } from './effects/core.effects';

// Entry Components
import { InformationDialogComponent } from './views/presentations/information-dialog/information-dialog.component';

// Components
import { AppComponent } from './app.component';
import { MainComponent } from './views/containers/main/main.component';
import { HomeComponent } from './views/containers/home/home.component';
import { SignInComponent } from './views/containers/sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, MainComponent, HomeComponent, SignInComponent, InformationDialogComponent],
  imports: [
    AppRoutingModule,
    AppUiModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, CoreEffects])
  ],
  providers: [],
  entryComponents: [InformationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
