import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})
export class CursosService {

	public newCursoEvent: EventEmitter<string> = new EventEmitter();

	private cursos: string[] = [
		'Java',
		'Angular',
		'PHP',
	];

	getCursos() {
		return this.cursos;
	}

	addCurso(curso: string) {
		this.cursos.push(curso);
		this.newCursoEvent.emit(curso);
	}

}
