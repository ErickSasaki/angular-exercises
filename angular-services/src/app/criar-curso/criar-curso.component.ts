import { CursosService } from './../cursos/cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-criar-curso',
	templateUrl: './criar-curso.component.html',
	styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

	constructor(private cursoService: CursosService) { }

	ngOnInit(): void {
		// Se inscreve no evento do serviço.
		this.cursoService.newCursoEvent.subscribe((curso: string) => console.log(curso));
	}

	public addCurso(curso: string) {
		this.cursoService.addCurso(curso);
	}

}
