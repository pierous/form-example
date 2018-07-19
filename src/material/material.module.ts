import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatDatepickerModule, MAT_DATE_FORMATS, NativeDateModule, DateAdapter, MatNativeDateModule } from '@angular/material';
import { AppDateAdapter } from '../utils/app-date-adapter';

const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'DD/MM/YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'DD/MM/YYYY',
  },
};

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    //{ provide: DateAdapter, useClass: AppDateAdapter },
    //{provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS}
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    NativeDateModule
  ],
})
export class MaterialModule { }