export class OrderService {
    getOrder(id) {
        // return fetch(`url/to/orders/${id}`);
        return Promise.resolve({
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
                description: 'What the car runs on',
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