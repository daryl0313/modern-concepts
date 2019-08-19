import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mc-double',
  template: `<p>{{ value }}</p>`
})
export class DoubleComponent {

  private _value: number;
  @Input() set value(v: number) { this._value = v * 2 }
  get value() { return this._value; }
}
