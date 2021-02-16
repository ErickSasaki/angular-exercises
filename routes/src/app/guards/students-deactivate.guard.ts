import { IFormCandeactivate } from './form-candeactivate';
import { StudentFormComponent } from './../students/student-form/student-form.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StudentsDeactivateGuard implements CanDeactivate<IFormCandeactivate> {
	canDeactivate(
		component: IFormCandeactivate,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		// Usado para todos componentes que implementam a interface IFormCandeactivate
		if (!component.formCanDeactivate()) {
			const exit = confirm('Dados não salvos serão perdidos, tem certeza que desejá sair?');
			if (!exit) {
				return false;
			}
		}
		return true;

		// Usado apenas no componente StudentFormComponent.
		// if (component.formChanged) {
		// 	const exit = confirm('Dados não salvos serão perdidos, tem certeza que desejá sair?');
		// 	if (!exit) {
		// 		return false;
		// 	}
		// }
	}
}
