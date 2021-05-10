import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './services/server.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule }  from '@angular/forms';
 import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppointmentsComponent } from './home/appointments/appointments.component';
import { CreateslotComponent } from './home/createslot/createslot.component';
@NgModule({
  declarations: [
    AppComponent,
    AppointmentsComponent,
    CreateslotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OwlDateTimeModule, 
         OwlNativeDateTimeModule,
          FormsModule,
          BrowserAnimationsModule,
          ReactiveFormsModule,
           FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
