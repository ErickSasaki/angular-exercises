import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
	{
		path: 'students',
		loadChildren: () => import('./students/students.module')
			.then((module) => module.StudentsModule),
	},
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
