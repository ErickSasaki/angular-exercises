import { ICourse } from '../course.model';
import { CoursesService } from '../courses.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-course-details',
	templateUrl: './course-details.component.html',
	styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

	public id: number;
	public course: ICourse;

	private paramsSubscription: Subscription;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private courseService: CoursesService,
	) { }

	ngOnInit(): void {
		// this.id = this.route.snapshot.params['id'];
		this.paramsSubscription = this.route.params.subscribe((params: any) => {
			this.id = Number(params['id']);
		});
		this.course = this.courseService.getCourse(this.id);

		if (!this.course) {
			alert("Curso não encontrado");
			this.router.navigate(['/courses']);
		}
	}

	ngOnDestroy() {
		this.paramsSubscription.unsubscribe();
	}

}
