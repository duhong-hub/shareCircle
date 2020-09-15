import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpService } from '../../services/http/';

import { NumberOnlyDirective } from './onlynumber.directive';

@NgModule({
  declarations: [
    NumberOnlyDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [],
  exports:[NumberOnlyDirective]
})

export class OnlyNumberModule {
  constructor(){
  }
}