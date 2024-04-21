import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarefa } from './Tarefa';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  //como se trata de uma avaliação, estou usando um localhost, portanto a porta dele pode variar de maquina para maquina, use a url da API
  url = 'http://localhost:5049/api/Tarefa'
  constructor(private http: HttpClient) { }

  ListaTarefas(): Observable<Tarefa[]>{
    return this.http.get<Tarefa[]>(this.url);
  }

  ObtemTarefa(id: string): Observable<Tarefa>{
    const obtemURL = `${this.url}/${id}`;

    return this.http.get<Tarefa>(this.url);
  }

  InsereTarefa(tarefa: Tarefa): Observable<any>{
    return this.http.post<Tarefa>(this.url, tarefa, httpOptions);
  }

  AtualizaTarefa(tarefa: Tarefa): Observable<any>{
    return this.http.put<Tarefa>(this.url, tarefa, httpOptions);
  }

  ExcluiTarefa(id: string): Observable<any>{
    const excluiURL = `${this.url}/${id}`;

    return this.http.delete<string>(excluiURL, httpOptions);
  }
}
