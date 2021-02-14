import { IStudent } from './student.model';
import { StudentsService } from './students.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-students',
	templateUrl: './students.component.html',
	styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

	constructor(private studentsService: StudentsService) { }

	public students: IStudent[];

	ngOnInit(): void {
		this.students = this.studentsService.getStudents();
	}

}
