import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';
import { Order } from './order.types';

@Injectable({ providedIn: 'root' })
export class OrderService {
    constructor(private _httpClient: HttpClient) { }

    public getOrder(id: number) {
        // this._httpClient.get(`url/to/orders/${id}`);
        return of<Order>({
            id,
            name: 'Buyer',
            address: {
                street1: '123 Giles Road',
                city: 'La Vista',
                state: 'NE',
                zip: '68128'
            },
            lineItems: [{
                id: 1,
                name: 'Tire',
                description: 'How the car rolls',
                price: 123.44
            }, {
                id: 2,
                name: 'Oil',
                description: 'Lubricates the engine',
                price: 12.34
            }]
        });
    }
}
