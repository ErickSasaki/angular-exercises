import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-number-counter',
	templateUrl: './number-counter.component.html',
	styleUrls: ['./number-counter.component.css']
})
export class NumberCounterComponent implements OnInit {

	@Input() public value: number = 0;
	@Output() private emitValue: EventEmitter<number> = new EventEmitter();
	@ViewChild('valueInput') private valueInput: ElementRef;

	constructor() { }

	ngOnInit(): void {
	}

	incrementValue(increment: number) {
		this.valueInput.nativeElement.style.backgroundColor = 'blue'
		console.log('valueInput: ', this.valueInput.nativeElement.style.backgroundColor);
		this.value += increment;
		this.emitValue.emit(this.value);
	}

}
