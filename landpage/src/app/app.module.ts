import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import {ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {FlashMessagesModule} from 'angular2-flash-messages/module';

import { DblistService } from './dblist.service';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule
} from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
/*import { AuthInterceptor } from "./form/auth-interceptor";
*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    FlashMessagesModule.forRoot()
    ],
  providers: [/*{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},*/
    DblistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
