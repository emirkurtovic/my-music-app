import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterLoginComponent } from './nav/register-login/register-login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RegisterLoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module,
    ToastrModule.forRoot({positionClass: "toast-bottom-right"}), // ToastrModule added,
    ModalModule.forRoot(),
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
