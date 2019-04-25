import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingPath } from './app-routing-path';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: RoutingPath.HOME, pathMatch: 'full' },
      { path: RoutingPath.HOME, component: HomeComponent }
    ]
  },
  { path: RoutingPath.SIGN_IN, component: SignInComponent },
  { path: '**', redirectTo: RoutingPath.HOME, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
