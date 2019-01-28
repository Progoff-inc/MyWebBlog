import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DeveloperComponent } from './developer/developer.component';
import { ClipboardModule } from 'ngx-clipboard';
// import { HouseholderComponent } from './householder/householder.component';
import { ExamsComponent } from './exams/exams.component';
import { NewExamComponent } from './new-exam/new-exam.component';
import { NewPaperComponent } from './new-paper/new-paper.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { NewTechnologyComponent } from './new-technology/new-technology.component';
import { FormBuilder } from '@angular/forms';
import { StudentService } from './services/StudentService';
import { ModalModule } from 'ngx-bootstrap';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DeveloperService } from './services/Developer.Service';
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './add/add.component';
import { WorksComponent } from './works/works.component';
import { StudiesComponent } from './studies/studies.component';
import { AuthComponent } from './auth/auth.component';
import {
  SocialLoginModule,
  AuthServiceConfig,
  VkontakteLoginProvider,
} from "angular-6-social-login-v2";
import { LoadComponent } from './load/load.component';
import { LoadService } from './services/load.service';
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: VkontakteLoginProvider.PROVIDER_ID,
          provider: new VkontakteLoginProvider("6828242")//6833515
        }
      ]
  );
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    StudentComponent,
    DeveloperComponent,
    // HouseholderComponent,
    ExamsComponent,
    NewExamComponent,
    NewPaperComponent,
    NewProjectComponent,
    NewTechnologyComponent,
    ProjectsComponent,
    AddComponent,
    WorksComponent,
    StudiesComponent,
    AuthComponent,
    LoadComponent
  ],
  imports: [
    ClipboardModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [FormBuilder, StudentService, HttpClient, DeveloperService,LoadService,{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
