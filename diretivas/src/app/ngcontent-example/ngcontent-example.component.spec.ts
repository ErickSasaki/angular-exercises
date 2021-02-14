import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcontentExampleComponent } from './ngcontent-example.component';

describe('NgcontentExampleComponent', () => {
	let component: NgcontentExampleComponent;
	let fixture: ComponentFixture<NgcontentExampleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [NgcontentExampleComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(NgcontentExampleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
