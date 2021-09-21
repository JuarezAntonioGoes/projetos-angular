import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora/calculadora.module';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { TarefaModule } from './tarefa/tarefa.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CalculadoraModule,
    ConversorModule,
    DashboardModule,
    JogoDaVelhaModule,
    TarefaModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
