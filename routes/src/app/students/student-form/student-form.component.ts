import { Subscription } from 'rxjs';
import { IStudent } from './../student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../students.service';
import { IFormCandeactivate } from 'src/app/guards/form-candeactivate';

@Component({
	selector: 'app-student-form',
	templateUrl: './student-form.component.html',
	styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements IFormCandeactivate {

	constructor(
		private studentsService: StudentsService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) { }

	private id: number;
	private paramsSubscription: Subscription;

	public formChanged: boolean = false;

	// Iniciado apenas para evitar erros.
	public student: IStudent = {
		id: 0,
		name: '',
		email: '',
	};

	ngOnInit(): void {
		this.getStudent();
	}

	ngOnDestroy(): void {
		this.paramsSubscription.unsubscribe();
	}

	public getStudent() {
		this.paramsSubscription = this.activatedRoute.params.subscribe((params: any) => {
			this.id = Number(params.id);
		});

		if (this.id) {
			this.student = this.studentsService.getStudent(this.id);

			if (!this.student) {
				alert('Aluno não encontrado.');
				this.router.navigate(['students']);
			}
		}

	}

	public saveStudent(): void {
		if (!this.student.id || !this.student.email || !this.student.name) {
			alert('Preencha todos os campos.');
			return;
		}

		if (this.id) {
			this.studentsService.editStudent(this.id, this.student);
		} else {
			this.studentsService.addStudent(this.student);
		}

		this.formChanged = false;
		alert('Salvo com sucesso!');
		this.router.navigate(['students']);
	}

	public cancel() {
		this.router.navigate(['students']);
	}

	public formChange() {
		this.formChanged = true;
	}

	public formCanDeactivate(): boolean {
		return !this.formChanged;
	}

}
