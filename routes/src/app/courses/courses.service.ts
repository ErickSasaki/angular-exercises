import { ICourse } from './course.model';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CoursesService {

	constructor() { }

	private courses: ICourse[] = [
		{ id: 1, name: 'Java' },
		{ id: 2, name: 'Angular' },
		{ id: 3, name: 'RXJS' },
	];

	public getCourses(): ICourse[] {
		return this.courses;
	}

	public getCourse(courseId: number) {
		return this.courses.find((course) => course.id === courseId);
	}

	public addCourse(newCourse: ICourse) {
		if (this.courses.find((course) => course.name === newCourse.name)) {
			console.log(`Curso ${newCourse} já existe.`);
		} else {
			this.courses.push(newCourse);
		}
	}

	public removeCourse(courseId: number) {
		const index = this.courses.findIndex((course) => course.id === courseId);
		if (index > -1) {
			this.courses = this.courses.filter((item) => item.id !== courseId);
		}
	}

}
