import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routes';
import { NgxPaginationModule } from 'ngx-pagination';
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [

  ],
  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
