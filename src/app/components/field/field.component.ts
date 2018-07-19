import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() title: string;
  @Input() name: string;
  @Input() formGroup: any;
  @Input() edit: boolean;
  @Input() type: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
