import { StudentsDetailsResolver } from './guards/student-details.resolve';
import { StudentsDeactivateGuard } from './../guards/students-deactivate.guard';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesGuard } from '../guards/courses.guard';

const routes: Routes = [
	{
		path: '', component: StudentsComponent,
		canActivateChild: [CoursesGuard],
		children: [
			{ path: 'new', component: StudentFormComponent },
			{
				path: ':id/edit', component: StudentFormComponent,
				canDeactivate: [StudentsDeactivateGuard],
			},
			{
				path: ':id', component: StudentDetailsComponent,
				resolve: { studentDetails: StudentsDetailsResolver },
			},
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentRoutingModule { }
