import { Directive, ElementRef, HostBinding, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
	selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

	@HostBinding('style.cursor') cursor: any;
	@HostBinding('style.text-decoration') textDecoration: string;

	@HostListener('mouseenter') handleMouseEnter() {
		// this.renderer.setStyle(this.elementRef, 'text-decoration', 'underline');
		// this.renderer.setStyle(this.elementRef, 'cursor', 'pointer');
		this.textDecoration = 'underline';
		this.cursor= 'pointer';
	}

	@HostListener('mouseleave') handleMouseLeave() {
		this.textDecoration = 'none';
		// this.renderer.setStyle(this.elementRef, 'text-decoration', 'none');
	}

	constructor(
		private elementRef: ElementRef,
		private renderer: Renderer2,
	) {
		this.elementRef = elementRef.nativeElement;
	}

}
