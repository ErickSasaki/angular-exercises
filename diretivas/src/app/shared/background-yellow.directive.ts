import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
	selector: '[backgroundYellow]'
})
export class BackgroundYellowDirective {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) {
		this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'yellow')
	}

}
