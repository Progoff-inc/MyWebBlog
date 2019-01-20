import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DeveloperComponent } from './developer/developer.component';
// import { HouseholderComponent } from './householder/householder.component';
import { ExamsComponent } from './exams/exams.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'exams/:id', component: ExamsComponent },
  { path: 'projects/:id', component: ProjectsComponent }
  // { path: 'farm', component: HouseholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
