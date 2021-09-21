import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './component/conversor.component';
import { Routes } from '@angular/router';

export const ConversorRoutes: Routes = [
  {
    path: 'conversor-moedas',
    component: ConversorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class ConversorRoutingModule {}
