import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-data-binding',
	templateUrl: './data-binding.component.html',
	styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

	public url: string = 'https://picsum.photos/400/400';
	public text: string = '';
	public savedText: string = '';
	public mouseOver: boolean = false;
	public name: string = 'abc';
	public counterValue: number = 5;

	constructor() { }

	ngOnInit(): void {
	}

	public getValor() {
		return 2;
	}

	public buttonHandleClick() {
		console.log('clicou!!!');
	}

	public handleKeyup(value: string) {
		this.text = value;
	}

	public saveValue() {
		this.savedText = this.text;
	}

	setMouseOver() {
		this.mouseOver = !this.mouseOver;
	}

	logEvent(event: Event) {
		console.log(event);
	}

}
