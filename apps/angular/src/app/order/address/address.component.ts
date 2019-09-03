import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mc-address',
  templateUrl: './address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressComponent {
  @Input() street1: string;
  @Input() street2?: string;
  @Input() city: string;
  @Input() state: string;
  @Input() zip: string;
}
