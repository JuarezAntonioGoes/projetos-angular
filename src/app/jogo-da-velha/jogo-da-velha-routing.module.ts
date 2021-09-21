import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './component';
import { Routes } from '@angular/router';

export const JogoDaVelhaRoutes: Routes = [
  {
    path: 'jogo-da-velha',
    component: JogoDaVelhaComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class JogoDaVelhaRoutingModule {}
