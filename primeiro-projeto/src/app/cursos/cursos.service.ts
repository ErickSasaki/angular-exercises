import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CursosService {

	private cursos: string[] = [
		'Java',
		'Angular',
		'Speedrun',
	];

	public getCursos() {
		return this.cursos;
	}

	constructor() { }
}
