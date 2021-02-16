import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CoursesGuard implements CanActivateChild {
	constructor() { }

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		console.log('route: ', route);
		// if (state.url.includes('edit')) {
		// 	return false;
		// }
		return true;
	}
}
