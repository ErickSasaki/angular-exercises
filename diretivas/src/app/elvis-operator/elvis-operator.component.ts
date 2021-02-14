import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-elvis-operator',
	templateUrl: './elvis-operator.component.html',
	styleUrls: ['./elvis-operator.component.css']
})
export class ElvisOperatorComponent implements OnInit {

	public task: any = {
		description: 'Descrição da tarefa',
		responsible: null,
		// responsible: {
		// 	name: 'João',
		// },
	};

	constructor() { }

	ngOnInit(): void {
	}

}
