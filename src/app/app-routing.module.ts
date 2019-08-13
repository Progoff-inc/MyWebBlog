import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { DeveloperComponent } from './developer/developer.component';
// import { HouseholderComponent } from './householder/householder.component';
import { ExamsComponent } from './exams/exams.component';
import { ProjectsComponent } from './projects/projects.component';
import { AddComponent } from './add/add.component';
import { WorksComponent } from './works/works.component';
import { StudiesComponent } from './studies/studies.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'developer', pathMatch: 'full' },
  // { path: 'student', component: StudentComponent },
  { path: 'developer', component: DeveloperComponent },
  // { path: 'exams/:id', component: ExamsComponent },
  { path: 'projects/:id', component: ProjectsComponent },
  { path: 'add/:id', component: AddComponent },
  { path: 'works/:id', component: WorksComponent },
  { path: 'studies/:id', component: StudiesComponent },
  { path: 'auth', component: AuthComponent, pathMatch: 'prefix' },
  { path: '**', component: NotFoundComponent}
  // { path: 'farm', component: HouseholderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
