import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumeroDirective,
      multi: true,
    },
  ],
})
export class NumeroDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {}

  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  @HostListener('keyup', ['$event'])
  onKeyUp($event) {
    let valor: string = $event.target.value;
    const posDecimal = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');

    if (posDecimal > 0) {
      valor = valor.substr(0, posDecimal) + '.' + valor.substr(posDecimal);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }
}
