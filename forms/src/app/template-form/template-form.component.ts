import { IUserModel } from './../models/user.model';
import { ICepModel } from '../models/cep.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs/operators';

@Component({
	selector: 'app-template-form',
	templateUrl: './template-form.component.html',
	styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

	public user: IUserModel = {
		address: {
		},
	};

	constructor(private http: HttpClient) { }

	ngOnInit(): void {
	}

	public submit(formData: IUserModel) {
		this.http.post<IUserModel>('https://httpbin.org/post', JSON.stringify(formData))
			.pipe(
				map(data =>  data),
			)
			.subscribe(data => console.log(data))
	}

	public applyCepMask(form: any): void {
		// Populado com ngModel
		// const cep = this.user.address.cep;

		// if (cep && cep.toString().length === 5) {
		// 	this.user.address.cep = cep + '-';
		// }

		const cep = form.value.address?.cep;
		if (cep && cep.toString().length === 5) {
			form.form.patchValue({
				address: {
					cep: cep + '-',
				},
			});
		}

	}

	public getAddress(cepInput: any, form: any): void {

		const cep = cepInput.value;
		const cepPattern = /\d{5}-\d{3}/;

		if (cep && cepPattern.test(cep)) {

			const url = `https://viacep.com.br/ws/${cep.replace(/\D/, '')}/json`

			this.http.get(url).subscribe((data: ICepModel) => {

				// Caso não encontre o cep coloca o erro no input para indicar que o cep é invalido.
				cepInput.control.setErrors(data.erro ? { cepInvalid: true } : null);
				this.addressPopulate(data, form);

			});

		} else {
			this.resetAddressInputs(form);
		}
	}

	private addressPopulate(data: ICepModel, form: any): void {

		form.form.patchValue({
			address: {
				street: data.logradouro,
				district: data.bairro,
				city: data.localidade,
				state: data.uf,
			}
		});

		// Populando com ngModel.
		// const address = this.user.address;

		// address.street = data.logradouro;
		// address.district = data.bairro;
		// address.city = data.localidade;
		// address.state = data.uf;

	}

	private resetAddressInputs(form: any): any {
		form.form.patchValue({
			address: {
				street: null,
				district: null,
				city: null,
				state: null,
			}
		});
	}

	isInvalid(input: any): boolean {
		return input.invalid && input.touched;
	}

}
