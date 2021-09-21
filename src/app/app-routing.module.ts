import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { TarefaRoutes } from './tarefa/tarefas-routing.module';
import { JogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  ...CalculadoraRoutes,
  ...ConversorRoutes,
  ...DashboardRoutes,
  ...JogoDaVelhaRoutes,
  ...TarefaRoutes,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
