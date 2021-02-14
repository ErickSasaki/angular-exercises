import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourse } from './course.model';
import { CoursesService } from './courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.component.html',
	styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

	constructor(
		private courseService: CoursesService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
	) { }

	private queryParams: Subscription;

	public page: number;
	public courses: ICourse[];

	ngOnInit(): void {
		this.queryParams = this.activatedRoute.queryParams.subscribe((queryParams: any) => {
			this.page = Number(queryParams['page']) || 0;
		});
		this.courses = this.courseService.getCourses();
	}

	ngOnDestroy(): void {
		this.queryParams.unsubscribe();
	}

	public addCourse(newCourse: string): void {
		this.courseService.addCourse({
			id: Math.floor(Math.random() * 1000) + 1,
			name: newCourse,
		});
	}

	public nextPage(): void {
		this.router.navigate(['/courses'], {
			queryParams: {
				page: this.page + 1,
			}
		});
	}

}
