import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	constructor(
		private authService: AuthService,
		private router: Router,
	) { }

	ngOnInit(): void {
	}

	public auth(user: string, password: string) {
		if (this.authService.login(user, password)) {
			this.router.navigate(['']);
		} else {
			alert('Usuário ou senha inválido');
		}
	}

}
