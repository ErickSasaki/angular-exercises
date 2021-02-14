import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt');

import { AppComponent } from './app.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
	declarations: [
		AppComponent,
		PipesExamplesComponent,
		CamelCasePipe,
		FiltroArrayPipe,
		FiltroArrayImpuroPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [
		{
			provide: LOCALE_ID,
			useValue: 'pt-BR'
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
