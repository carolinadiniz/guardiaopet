import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  formulario = new FormGroup({
    fotos: new FormControl(''),
    nome: new FormControl(''),
    idade: new FormControl(''),
    peso: new FormControl(''),
    especie: new FormControl(''),
    porte: new FormControl(''),
    descricao: new FormControl(''),
    tags: new FormControl(''),
    estado: new FormControl(''),
    cidade: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
  })

  onSubmit(): void {
    console.log(this.formulario.value)
  }
}
