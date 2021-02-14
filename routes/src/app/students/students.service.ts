import { IStudent } from './student.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class StudentsService {

	private students: IStudent[] = [
		{ id: 1, name: 'João', email: 'joao@gmail.com' },
		{ id: 2, name: 'Pedro', email: 'pedro@hotmail.com' },
		{ id: 3, name: 'Erick', email: 'erick@yahoo.com' },
	];

	constructor() { }

	private getIndexById(id: number): number {
		const index = this.students.findIndex((item) => item.id === id);

		if (index < 0) {
			alert(`Item de id ${id} não encontrado!`);
		}
		return index;
	}

	public getStudents(): IStudent[] {
		return this.students;
	}

	public getStudent(studentId: number): IStudent {
		return this.students.find((item) => item.id === studentId);
	}

	public addStudent(data: IStudent) {
		if (this.students.find((item) => item.id === data.id)) {
			alert(`Item com id ${data.id} já existe.`);
		} else {
			this.students.push(data);
		}
	}

	public editStudent(studentId: number, newData: IStudent): void {
		const index = this.getIndexById(studentId);

		if (index > -1) {
			this.students[this.getIndexById(studentId)] = newData;
		}
	}

	public removeStudent(studentId: number): void {
		const index = this.getIndexById(studentId);

		if (index > -1) {
			this.students.splice(index, 1);
		}
	}
}
