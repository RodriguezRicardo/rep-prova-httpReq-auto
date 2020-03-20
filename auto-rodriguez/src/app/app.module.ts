import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';  //ricordarsi da dove importare il modulo

import { AppComponent } from './app.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentedComponent } from './rented/rented.component';
import { RentListComponent } from './rent-list/rent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    RentedComponent,
    RentListComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
