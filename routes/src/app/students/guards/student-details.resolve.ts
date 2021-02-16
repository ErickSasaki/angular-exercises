import { Observable } from 'rxjs';
import { StudentsService } from './../students.service';
import { IStudent } from './../student.model';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class StudentsDetailsResolver implements Resolve<IStudent> {

	constructor(private studentsService: StudentsService) {}

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
	): IStudent {
		let id: number = Number(route.params['id']);
		return this.studentsService.getStudent(id);
	}

}
