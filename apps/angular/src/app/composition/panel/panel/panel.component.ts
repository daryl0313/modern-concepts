import { Component, Input } from '@angular/core';

// panel.component.ts
@Component({
  selector: 'mc-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  @Input() title: string;
}


