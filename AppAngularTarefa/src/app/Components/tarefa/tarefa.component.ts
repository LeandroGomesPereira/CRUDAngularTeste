import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent {
  formulario: any;
  tituloFormulario: string | undefined;

  ngOninit(): void{
    this.tituloFormulario = "Tarefa"

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      descricao: new FormControl(null),
      status: new FormControl(false)
    })
  }
}
