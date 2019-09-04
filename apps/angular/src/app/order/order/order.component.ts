// order.component.ts
import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order.types';

@Component({
  selector: 'mc-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnChanges, OnDestroy {
  constructor(private _orderService: OrderService) { }

  order: Order;
  ngOnInit(): void {
    this._orderService.getOrder(1)
      .subscribe(o => this.order = o);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // custom update logic
  }
  ngOnDestroy(): void {
    // cleanup logic
  }

  // order.component.ts
  handleEditClicked(lineItemId: number) {
    console.log('Edit was clicked for', lineItemId);
  }

  trackByOrderId(index: number, order: Order) {
    return order.id;
  }
}

