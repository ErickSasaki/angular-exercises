import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { ICepModel } from '../models/cep.model';

@Component({
	selector: 'app-data-form',
	templateUrl: './data-form.component.html',
	styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

	public form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private http: HttpClient
	) { }

	ngOnInit(): void {
		this.generateForm()
	}

	private generateForm() {
		// this.form = new FormGroup({
		// 	name: new FormControl(),
		// 	email: new FormControl(),
		// });

		this.form = this.formBuilder.group({

			name: [null, [Validators.required, Validators.minLength(3)]],
			email: [null, [Validators.required, Validators.email]],

			address: this.formBuilder.group({
				cep: [null, [Validators.required, Validators.pattern('\\d{5}-\\d{3}'), Validators.maxLength(9)]],
				number: [null, [Validators.required]],
				complement: [null, [Validators.required]],
				street: [null],
				district: [null],
				city: [null],
				state: [null],
			})

		});
	}

	public submit(formData: any): void {
		console.log(formData);

		if (this.form.valid) {
			console.log('formulário válido!');
			// this.http.post<any>('https://httpbin.org/post', JSON.stringify(formData))
			// 	.pipe(
			// 		map(data =>  data),
			// 	)
			// 	.subscribe(data => {
			// 		console.log(data)
			// 		this.resetForm()
			// 	},
			// 	(error: any) => console.log('error: ', error));
		} else {
			this.verifyValidations(this.form);
		}
	}

	private verifyValidations(formGroup: FormGroup): void {
		for (const inputName of Object.keys(formGroup.controls)) {
			const control = formGroup.get(inputName);

			if ((control as any).controls) {
				this.verifyValidations(control as any);
			}
			control.markAsTouched();
		}
	}

	public isInvalid(inputName: string): boolean {
		const input = this.form.get(inputName);
		return input.invalid && input.touched;
	}

	public verifyValidEmail(name: string): boolean {
		const input = this.form.get(name);
		return this.verifyError('email', input)
	}

	public verifyRequired(name: string): boolean {
		const input = this.form.get(name);
		return this.verifyError('required', input);
	}

	public verifyPattern(name: string): boolean {
		const input = this.form.get(name);
		return this.verifyError('pattern', input);
	}

	private verifyError(errorName: string, input: AbstractControl): boolean {
		if (input?.touched && input?.errors && input?.errors[errorName]) {
			return true;
		}
	}

	public getAddress(): void {

		const cepInput = this.form.get('address.cep');
		const cep = cepInput?.value;
		const cepPattern = /\d{5}-\d{3}/;

		if (cep && cepPattern.test(cep)) {

			const url = `https://viacep.com.br/ws/${cep.replace(/\D/, '')}/json`

			this.http.get(url).subscribe((data: ICepModel) => {

				// Caso não encontre o cep coloca o erro no input para indicar que o cep é invalido.
				cepInput.setErrors(data.erro ? { cepInvalid: true } : null);
				this.addressPopulate(data);

			});

		} else {
			this.resetAddressInputs();
		}
	}

	private addressPopulate(data: ICepModel): void {

		this.form.patchValue({
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

	private resetAddressInputs(): any {
		this.form.patchValue({
			address: {
				street: null,
				district: null,
				city: null,
				state: null,
			}
		});
	}

	public resetForm() {
		this.form.reset();
	}

}
