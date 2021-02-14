import { Input, OnChanges } from '@angular/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-lifecycle',
	templateUrl: './lifecycle.component.html',
	styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentInit,
	AfterContentChecked,
	AfterViewChecked,
	OnDestroy {

	@Input() public value: number = 1;

	constructor() {
		console.log('constructor');
	}

	ngOnChanges(): void {
		console.log('ngOnChanges');
	}

	ngOnInit(): void {
		console.log('ngOnInit');
	}

	ngDoCheck(): void {
		console.log('ngDoCheck');
	}

	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}

	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}

	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}

	ngOnDestroy(): void {
		console.log('ngOnDestroy');
	}

	public incrementValue() {
		this.value++;
	}
}
