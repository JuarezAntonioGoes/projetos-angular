import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ConversorComponent } from './component/conversor.component';
import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './utils';

@NgModule({
  declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
