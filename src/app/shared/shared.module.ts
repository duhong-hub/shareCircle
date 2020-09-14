import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from './loading';


@NgModule({
      declarations: [
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule
    ],
    providers: [

    ],
    exports: [
        CommonModule,
        FormsModule,
        LoadingModule
    ]
})
export class SharedModule {
}
