// Order.jsx
import React from 'react';
import { LineItem } from './LineItem';
import { Panel } from '../composition/Panel/Panel'
import { OrderConsumer } from '../composition/OrderConsumer';

export class Order extends React.Component {
  componentDidUpdate(prevProps) {
    // custom update logic
  }
  componentWillUnmount() {
    // cleanup logic
  }

  // Order.jsx
  handleEditClick = (id) => {
    console.log('Edit was clicked for', id);
  }

  render() {
    return (
      <OrderConsumer orderId={1}>
        {(order) => (<>
          <Panel title={order.name}>
            <h2>Line Items</h2>
            <div>
              {order.lineItems.map(lineItem =>
                <LineItem key={lineItem.id} onEditClick={this.handleEditClick}
                  item={lineItem} />
              )}
            </div>
          </Panel>
        </>)
        }
      </OrderConsumer>
    );
  }
}

