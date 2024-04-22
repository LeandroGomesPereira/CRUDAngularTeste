import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/Tarefa';
import { TarefaService } from 'src/app/tarefa.service';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.css'
})
export class TarefaComponent implements OnInit{
  formulario: any;
  tituloFormulario: string | undefined;
  tarefas: Tarefa[] | undefined;
  nomeTarefa: string | undefined;
  idTarefa!: string

  tabelaVisivel: boolean = true;
  formularioVisivel: boolean = false;

  modalRef: BsModalRef | undefined;

  constructor (
    private tarefaSevice: TarefaService, private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.tarefaSevice.ListaTarefas().subscribe(resultado => {
      this.tarefas = resultado;
      this.processaDescricaoStatus();
    });
  }

  obtemFormularioAtualizacao(id: string): void{
    this.tabelaVisivel = false;
    this.formularioVisivel = true;
    this.tituloFormulario = "Atualizar Tarefa";
    console.log(id);

    this.tarefaSevice.ObtemTarefa(id).subscribe(resultado => {
      console.log(resultado);

      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        nome: new FormControl(resultado.nome),
        descricao: new FormControl(resultado.descricao),
        status: new FormControl(resultado.status)
      });
    });
  }

  obtemFormularioCadastro(): void{
    this.tabelaVisivel = false;
    this.formularioVisivel = true;
    this.tituloFormulario = "Inserir Tarefa";

    this.formulario = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl(null),
      descricao: new FormControl(null),
      status: new FormControl(false)
    });
  }

  obtemConfirmacaoExclusao(id: string, nome: string | undefined, modalExclusao: TemplateRef<any>): void{
    this.modalRef = this.modalService.show(modalExclusao);

    this.idTarefa = id;
    this.nomeTarefa = nome;
  }

  voltaTabela(): void{
    this.tabelaVisivel = true;
    this.formularioVisivel = false;

    this.tarefaSevice.ListaTarefas().subscribe(resultado => {
      this.tarefas = resultado;
      this.processaDescricaoStatus();
    });
  }

  cadastraTarefa(): void{
    const tarefa: Tarefa = this.formulario.value;

    if (tarefa.id){
      this.tarefaSevice.AtualizaTarefa(tarefa).subscribe(() => {
        this.voltaTabela();
        alert('Tarefa atualizada com sucesso');
      });
    }
    else{
      this.tarefaSevice.InsereTarefa(tarefa).subscribe(() => {
        this.voltaTabela();
        alert('Tarefa inserida com sucesso');
      });
    }
  }

  excluiTarefa(idTarefa: string){
    this.tarefaSevice.ExcluiTarefa(idTarefa).subscribe(() => {
      this.modalRef?.hide()
      alert('Tarefa exluída com sucesso');
      this.tarefaSevice.ListaTarefas().subscribe(resultado => {
        this.tarefas = resultado;
        this.processaDescricaoStatus();
      });
    });
  }

  processaDescricaoStatus(): void{
    this.tarefas?.forEach(registro => {
      if(registro.status){
        registro.statusDescricao = 'Sim';
      }
      else{
        registro.statusDescricao = 'Não';
      }
    });
  }

}
