import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IStudent } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
	selector: 'app-student-details',
	templateUrl: './student-details.component.html',
	styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

	constructor(
		private studentsService: StudentsService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) { }

	public student: IStudent;
	private routeSubscription: Subscription;
	private id: number;

	ngOnInit(): void {
		this.getStudent();
	}

	ngOnDestroy(): void {
		this.routeSubscription.unsubscribe();
	}

	/**
	 * Recupera os dados do aluno.
	 */
	private getStudent(): void {
		this.routeSubscription = this.activatedRoute.params.subscribe((params) => {
			this.id = Number(params.id || 0);
			this.student = this.studentsService.getStudent(this.id);
		});
	}

	public deleteStudent(): void {
		if (window.confirm(`Tem certeza que deseja remover o aluno ${this.student.name}?`)) {
			this.studentsService.removeStudent(this.id);
			this.router.navigate(['students']);
		}
	}

	public editStudent(): void {
		this.router.navigate(['students', this.id, 'edit']);
	}

}
