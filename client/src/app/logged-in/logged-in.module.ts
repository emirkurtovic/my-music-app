import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggedInRoutingModule } from './logged-in-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditSongComponent } from './dashboard/add-edit-song/add-edit-song.component';
import { BrowserModule } from '@angular/platform-browser';
import { FilterComponent } from './dashboard/filter/filter.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddEditSongComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    PaginationModule.forRoot(),
    FormsModule
  ]
})
export class LoggedInModule { }
