import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from '../home/home.component';
import { AuthGuard } from '../_guards/auth.guard';
import { AddEditSongComponent } from './dashboard/add-edit-song/add-edit-song.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'add-song',   component: AddEditSongComponent},
  { path: '',   component: DashboardComponent}
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }