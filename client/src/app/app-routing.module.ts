import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  //prebacit kasnije 'dashboard'->'' pomocu usefactory
  {
    path: 'dashboard',
    loadChildren: () => import('./logged-in/logged-in.module').then(m => m.LoggedInModule),
    canLoad: [AuthGuard]
  },
  
  { path: '',   component: HomeComponent, pathMatch: 'full' }, 
  { path: '**', redirectTo: '' }, 
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }