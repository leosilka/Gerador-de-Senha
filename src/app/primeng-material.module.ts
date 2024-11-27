import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { KnobModule } from 'primeng/knob';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckboxModule,
    KnobModule,
    InputTextModule,
  ],
  exports: [
    CheckboxModule,
    KnobModule,
    InputTextModule,
  ]
})
export class PrimengMaterialModule { }
