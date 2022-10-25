import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PropheciesComponent } from './prophecies/prophecies.component';
import { ProphecyDetailComponent } from './prophecy-detail/prophecy-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProphecySearchComponent } from './prophecy-search/prophecy-search.component';
import { AdminpropheciesComponent } from './adminprophecies/adminprophecies.component';
import { AdminDetailComponent } from './admin-detail/admin-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PropheciesComponent,
    ProphecyDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProphecySearchComponent,
    AdminpropheciesComponent,
    AdminDetailComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
