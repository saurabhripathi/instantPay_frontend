import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext'
import { DialogModule } from 'primeng/dialog'
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button';
/** imported modules and components */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    CommonModule,
    CardModule,
    InputTextModule,
    DialogModule,
    CardModule,
    ButtonModule]
})
export class NgPrimeModule { }
