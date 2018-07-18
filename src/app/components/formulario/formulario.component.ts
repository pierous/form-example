import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public item: object;

  public itemForm: FormGroup;

  constructor(private fb: FormBuilder) {
    const ctrl = this;
    // this.item = {
    //   nombre: 'David',
    //   apellido: null,
    // };
    this.itemForm = this.fb.group({
      nombre: ['David', Validators.required],
      apellido: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.itemForm.controls);
  }

}
