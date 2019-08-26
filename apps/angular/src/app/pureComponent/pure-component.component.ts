import { Component, OnInit, ChangeDetectorRef, Input, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

@Component({
  selector: 'mc-pure-component',
  template: `
    <button (click)="handleSomeEvent()">
      Click Me - (
        {{displayThisValue}}:
        {{clickCount}}
      )
    </button>
    <div>
      Interval Count: {{intervalCount}}
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureComponentComponent implements OnInit, OnDestroy {
  constructor(private _changeDetectorRef: ChangeDetectorRef) {
    // Change detection will not run automatically for this component
    // (nor it's children). It will only run if the inputs change or
    // an internal event happens. The ChangeDetectorRef can be used
    // if change detection needs to be ran manually.

    // 👇 can be used to manually trigger change detection
    // this._changeDetectorRef.detectChanges()
  }

  @Input() displayThisValue: string;

  clickCount = 0;
  intervalCount = 0;

  intervalRef: number;

  ngOnInit() {
    this.intervalRef = window.setInterval(() => {
      // 👇 will not trigger change detection ⛔
      this.intervalCount = this.intervalCount + 1;

      // 👇 will
      // this._changeDetectorRef.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    window.clearInterval(this.intervalRef);
  }

  handleSomeEvent() {
    // Events will automatically trigger change detection
    this.clickCount = this.clickCount + 1;
  }
}
