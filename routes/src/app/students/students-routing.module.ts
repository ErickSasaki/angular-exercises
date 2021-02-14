import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '', component: StudentsComponent, children: [
			{ path: 'new', component: StudentFormComponent },
			{ path: ':id/edit', component: StudentFormComponent },
			{ path: ':id', component: StudentDetailsComponent },
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StudentRoutingModule { }
