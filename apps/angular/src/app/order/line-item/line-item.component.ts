import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LineItem } from '../order.types';

@Component({
  selector: 'mc-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent {
  @Input() item: LineItem;
  
  // line-item.component.ts
  @Output() editClicked = new EventEmitter<number>();
  handleEditClicked(){
    this.editClicked.emit(this.item.id);
  }
}
