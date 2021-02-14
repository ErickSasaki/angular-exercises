import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'courses', component: CoursesComponent },
	{ path: 'course/:id', component: CourseDetailsComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CoursesRoutingModule { }
