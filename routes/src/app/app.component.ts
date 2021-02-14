import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private auth: AuthService) { }

	public showNavBar: boolean = false;

	ngOnInit(): void {
		this.auth.loggedEmitter.subscribe((value) => this.showNavBar = value);
	}
}
