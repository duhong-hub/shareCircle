import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { DropLoadDirective } from './dropload.directive';

@NgModule({
	declarations: [
		DropLoadDirective,
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	providers: [],
	exports: [DropLoadDirective]
})

export class DropLoadModule {
	constructor() {
	}
}