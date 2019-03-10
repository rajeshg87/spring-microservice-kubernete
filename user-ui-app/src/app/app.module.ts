import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([AppComponent, UserComponent])
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
