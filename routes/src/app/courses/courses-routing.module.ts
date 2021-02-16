import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesGuard } from '../guards/courses.guard';

const routes: Routes = [
	{
		path: '', component: CoursesComponent, children: [
			{ path: ':id', component: CourseDetailsComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursesRoutingModule { }
