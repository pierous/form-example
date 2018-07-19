import { Component, OnInit, forwardRef } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  //providers: [ provider ]
})
export class FormularioComponent implements OnInit {

  public item: object;

  public itemForm: FormGroup;

  public edit: boolean;

  constructor(private fb: FormBuilder) {
    const ctrl = this;
    ctrl.edit = false;
    // this.item = {
    //   nombre: 'David',
    //   apellido: null,
    // };
    this.itemForm = this.fb.group({
      nombre: ['David', Validators.required],
      apellido: [null, [Validators.required, Validators.maxLength(3)]],
      fecha: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemForm.controls);
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  change() {
    let day = this.itemForm.value.fecha.getDay() + 1;
    let month = this.itemForm.value.fecha.getMonth() + 1;
    let year = this.itemForm.value.fecha.getFullYear();
    day = ('00' + day).slice(-2);
    month = ('00' + month).slice(-2);
    this.itemForm.patchValue({
      fecha: `${year}-${month}-${day}`,
    });
  }

}

var provider = {
  provide: FormularioComponent,
  useExisting: forwardRef(function () { return FormularioComponent; })
};
