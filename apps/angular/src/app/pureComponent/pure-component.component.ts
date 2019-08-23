import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'mc-pure-component',
  template: `
    <div (click)="handleSomeEvent()">
      {{displayThisValue}}
      {{myState}}
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureComponentComponent implements OnInit {
  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    // Change detection will not run automatically for this component
    // (nor it's children) unless any inputs' value changes.  The ChangeDetectorRef
    // can be used if change detection needs to be ran manually.

    // 👇 can be used to manually trigger change detection
    // this._changeDetectorRef.detectChanges()
  }

  @Input() displayThisValue: string;

  myState = 0;

  ngOnInit() {
  }

  handleSomeEvent() {
    // 👇 will not trigger change detection ⛔
    this.myState = this.myState++;

    // 👇 will
    // this._changeDetectorRef.detectChanges()
  }
}
