import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-diretiva-ngstyle',
	templateUrl: './diretiva-ngstyle.component.html',
	styleUrls: ['./diretiva-ngstyle.component.css']
})
export class DiretivaNgstyleComponent implements OnInit {

	public favorite: boolean = false;
	public width: number = 50;

	constructor() { }

	ngOnInit(): void {
	}

}
