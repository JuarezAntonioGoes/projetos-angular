import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Conversao, ConversaoResponse } from '../models';
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css'],
})
export class ModalCotacaoComponent implements OnInit {
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Input() onConfirm: EventEmitter<any> = new EventEmitter();

  constructor(private conversorService: ConversorService) {}

  ngOnInit(): void {}

  novaConsulta(): void {
    this.onConfirm.emit(null);
  }

  get valorConvertido(): string {
    if (this.conversaoResponse === undefined) {
      return '0';
    }

    return (
      this.conversao.valor *
      this.conversaoResponse.rates[this.conversao.moedaPara]
    ).toFixed(2);
  }

  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(
      this.conversaoResponse,
      this.conversao
    );
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(
      this.conversaoResponse,
      this.conversao
    );
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }
}
