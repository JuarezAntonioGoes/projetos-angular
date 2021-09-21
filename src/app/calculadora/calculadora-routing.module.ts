import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora';

export const CalculadoraRoutes: Routes = [
  {
    path: 'calculadora',
    component: CalculadoraComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class CalculadoraRoutingModule {}
