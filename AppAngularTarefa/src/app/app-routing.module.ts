import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefaComponent } from './Components/tarefa/tarefa.component';

const routes: Routes = [
  {path: '', redirectTo: 'tarefa', pathMatch: 'full'},
  {path: 'tarefa', component: TarefaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
