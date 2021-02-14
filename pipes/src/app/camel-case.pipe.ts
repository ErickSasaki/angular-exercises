import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

	transform(value: string): string {
		const splitedValues = value.split(' ');
		let result = '';

		for (const splitedValue of splitedValues) {

			const upperCase = splitedValue.substr(0, 1).toUpperCase();
			const lowerCase = splitedValue.substr(1).toLowerCase();

			result += upperCase + lowerCase + ' ';
		}

		return result;
	}

}
