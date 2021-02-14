import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretiva-ngif',
	templateUrl: './diretiva-ngif.component.html',
	styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

	public cursos: string[] = [];
	// public showCourses = this.cursos.length > 0 ? true : false;

	constructor() { }

	ngOnInit(): void {
	}

	addCourse() {
		this.cursos.push('novo curso');
	}

}
