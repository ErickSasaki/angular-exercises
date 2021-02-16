import { CoursesGuard } from './guards/courses.guard';
import { AuthGuard } from './guards/auth.guard';
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
		canActivate: [AuthGuard],
		canLoad: [AuthGuard],
		// canActivateChild: [CoursesGuard],
	},
	{
		path: 'courses',
		loadChildren: () => import('./courses/courses.module')
			.then((module) => module.CoursesModule),
		canActivate: [AuthGuard],
		canLoad: [AuthGuard],
		canActivateChild: [CoursesGuard]
	},
	{ path: 'login', component: LoginComponent },
	{
		path: 'home', component: HomeComponent,
		canActivate: [AuthGuard],
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component: NotFoundComponent },
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes,
			// { useHash: true }
		),
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
