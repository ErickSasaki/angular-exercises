import { CoursesRoutingModule } from './courses-routing.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
	declarations: [
		CoursesComponent,
		CourseDetailsComponent,
	],
	imports: [
		CommonModule,
		CoursesRoutingModule
	]
})
export class CoursesModule { }
