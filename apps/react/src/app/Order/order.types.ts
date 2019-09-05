export class Address {
    street1: string;
    street2?: string;
    city: string;
    state: string;
    zip: string;
}

export class LineItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

export class Order {
    id: number;
    name: string;
    address: Address;
    lineItems: LineItem[];
}
