import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css'],
})
export class FormularioReactivoComponent implements OnInit {
  formularioIngresar: FormGroup;

  constructor() {
    let ExpRegSoloNumeros = '^[0-9]+$';
    let ExpRegSoloLetras = '^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$';

    let controles: any = {
      nombre: new FormControl('', [
        Validators.required,
        Validators.pattern(ExpRegSoloLetras),
      ]),
      edad: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.pattern(ExpRegSoloNumeros),
      ]),
      correo: new FormControl('', [Validators.required, Validators.email]),
      activo: new FormControl(null, [Validators.required]),
    };

    this.formularioIngresar = new FormGroup(controles);
  }

  agregar(){
    console.log("--", this.formularioIngresar)
  }

  ngOnInit(): void {}
}
