import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from './loading';
import { FormatTimePipe } from './pipes/datafilter.pipe';
import { DropLoadModule } from './directives/dropload/dropload.module';


@NgModule({
    declarations: [
		FormatTimePipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        LoadingModule,
        DropLoadModule
    ],
    providers: [

    ],
    exports: [
        FormatTimePipe,
        CommonModule,
        FormsModule,
        LoadingModule,
        DropLoadModule
    ]
})
export class SharedModule {
}
