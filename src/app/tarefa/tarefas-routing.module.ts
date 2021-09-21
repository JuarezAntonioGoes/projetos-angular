import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
  {
    path: 'tarefas/editar/:id',
    component: EditarTarefaComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class TarefasRoutingModule {}
