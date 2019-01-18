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
import { NewExamComponent } from './new-exam/new-exam.component';
import { NewPaperComponent } from './new-paper/new-paper.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewTechnologyComponent } from './new-technology/new-technology.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    DeveloperComponent,
    HouseholderComponent,
    ExamsComponent,
    NewExamComponent,
    NewPaperComponent,
    NewProjectComponent,
    NewTechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
