import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

	transform(value: string[], ...args: string[]): unknown {
		if (!value) {
			return value;
		}

		const filter = new RegExp(args[0].toLowerCase());

		return value.filter((item) => filter.test(item));
	}

}
