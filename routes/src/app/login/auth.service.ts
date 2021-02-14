import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private users: any[] = [
		{ user: 'admin', password: 'admin' },
		{ user: 'user', password: '123' },
		{ user: 'test', password: '321' },
	]

	public logged: boolean = false;

	public loggedEmitter: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	public login(user: string, password: string): boolean {
		if (this.users.find((item) => item.user === user && item.password === password)) {
			this.logged = true;
		} else {
			this.logged = false;
		}

		this.loggedEmitter.emit(this.logged);
		return this.logged;
	}

}
