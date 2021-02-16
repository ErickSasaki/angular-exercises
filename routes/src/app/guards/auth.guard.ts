import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

	constructor(
		private auth: AuthService,
		private router: Router,
	) { }

	private verifyAuth(): boolean {
		if (this.auth.logged) {
			return true;
		}

		this.router.navigate(['login']);
		return false;
	}

	public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		return this.verifyAuth();
	}

	canLoad(route: Route): Observable<boolean> | boolean {
		return this.verifyAuth();
	}

}
