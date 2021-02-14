import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
	selector: 'app-pipes-examples',
	templateUrl: './pipes-examples.component.html',
	styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {

	public livro: any = {
		titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
		rating: 4.54321,
		numeroPaginas: 314,
		preco: 44.99,
		dataLancamento: new Date(2016, 5, 23),
		url: 'http://a.co/glqjpRP'
	};

	public livros: string[] = ['angular2', 'java for begginers', 'dream book'];
	public filtro: string = '';

	public asyncValue = new Promise((resolve, reject) => {
		setTimeout(() => { resolve('valor assincrono') }, 2000)
	})

	constructor() { }

	ngOnInit(): void {
	}

	public addBook(bookName: string) {
		this.livros.push(bookName);
	}

	public getFilteredBooks() {
		const filter = new RegExp(this.filtro);
		return this.livros.filter((item) => filter.test(item));
	}

}
