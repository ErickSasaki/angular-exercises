import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';
import { __assign } from 'tslib';

@Component({
	selector: 'app-cursos',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

	public cursos: string[] = [];

	constructor(private cursosService: CursosService) {
	}

	ngOnInit(): void {
		this.cursos = this.cursosService.getCursos();
	}

}
