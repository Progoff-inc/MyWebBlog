import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DeveloperComponent } from './developer/developer.component';
import { HouseholderComponent } from './householder/householder.component';
import { ExamsComponent } from './exams/exams.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    DeveloperComponent,
    HouseholderComponent,
    ExamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
