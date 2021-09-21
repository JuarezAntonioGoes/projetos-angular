import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, pipe } from 'rxjs';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  private readonly BASE_URL = 'http://data.fixer.io/api/latest';
  private readonly ACCESS_KEY = 'f9e3ab729433b4f544a64a5eda0a47b7';

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?access_key=${this.ACCESS_KEY}`;

    return this.http.get<ConversaoResponse>(this.BASE_URL + params);
  }

  cotacaoPara(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return conversaoResponse.date;
  }
}
