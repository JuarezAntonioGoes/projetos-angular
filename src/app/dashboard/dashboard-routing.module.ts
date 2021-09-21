import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class DashboardRoutingModule {}
