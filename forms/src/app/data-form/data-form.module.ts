import { HttpClientModule } from '@angular/common/http';
import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [
		DataFormComponent,
	],
	imports: [
		CommonModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
	]
})
export class DataFormModule { }
