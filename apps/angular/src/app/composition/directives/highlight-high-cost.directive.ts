import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[mcHighlightHighCost]'
})
export class HighlightHighCostDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private _renderer: Renderer2
  ) { }

  _highlightColor = 'yellow';
  @Input('mcHighlightHighCost') set highlightColor(value: string) {
    this._highlightColor = value;
    this.updateHighlight();
  }

  private _value = 0;
  @Input() set value(v: number) {
    this._value = v;
    this.updateHighlight();
  }

  @Input() hoverBorderColor = 'black';
  @HostListener('mouseenter') onMouseEnter() {
    if (this.hoverBorderColor) {
      this._renderer.setStyle(this.el.nativeElement, 'border',
        `solid 1px ${this.hoverBorderColor}`);
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._renderer.removeStyle(this.el.nativeElement, 'border');
  }

  ngOnInit() {
    this.updateHighlight();
  }

  private updateHighlight() {
    if (this._value > 100) {
      this._renderer.setStyle(this.el.nativeElement, 'color', this._highlightColor);
    } else {
      this._renderer.removeStyle(this.el.nativeElement, 'color');
    }
  }
}
