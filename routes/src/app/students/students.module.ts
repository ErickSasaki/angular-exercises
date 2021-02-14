import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './students-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		StudentDetailsComponent,
		StudentFormComponent,
		StudentsComponent,
	],
	imports: [
		CommonModule,
		StudentRoutingModule,
		FormsModule,
	]
})
export class StudentsModule { }
