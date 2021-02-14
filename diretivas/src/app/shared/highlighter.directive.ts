import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[highlighter]'
})
export class HighlighterDirective {

	@HostBinding('style.cursor') cursor: any;
	@HostBinding('style.background-color') backgroundColor: string;

	@HostListener('mouseenter') handleMouseEnter() {
		this.backgroundColor = this.hightLightColor;
		this.cursor = 'pointer';
	}

	@HostListener('mouseleave') handleMouseLeave() {
		this.backgroundColor = this.defaultColor;
	}

	@Input() private defaultColor: string = 'white';
	@Input('highlighter') public hightLightColor: string = 'yellow';

	constructor() {
	}

	ngOnInit() {
		this.backgroundColor = this.defaultColor;
	}
}
