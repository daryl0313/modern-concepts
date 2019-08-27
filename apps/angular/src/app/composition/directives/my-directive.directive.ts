import { Directive, OnInit, Renderer2, TemplateRef, ViewContainerRef, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[mcMyDirective]'
})
export class MyDirectiveDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private _renderer: Renderer2
  ) { }

  @Input('mcMyDirective') hoverBorderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor(this.hoverBorderColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor(null);
  }

  ngOnInit() {
    const newDiv = this._renderer.createElement('div') as HTMLDivElement;
    this._renderer.setStyle(newDiv, 'color', 'red');

    const divTextContent = this._renderer.createText('This was added by mcMyDirective');
    this._renderer.appendChild(newDiv, divTextContent);

    this._renderer.appendChild(this.el.nativeElement, newDiv);
  }

  private setBorderColor(value: string) {
    this._renderer.setStyle(this.el.nativeElement, 'border-color', value);
  }
}
