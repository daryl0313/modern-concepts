// Order.jsx
import React from 'react';
import { LineItem } from './LineItem';
import { Panel } from '../composition/Panel/Panel'
import { OrderConsumer } from '../composition/OrderConsumer';
import { withOrderFromService } from '../composition/OrderConsumerHOC';
import { useOrderService } from '../composition/OrderServiceHook';

// export class Order extends React.Component {
//   componentDidUpdate(prevProps) {
//     // custom update logic
//   }
//   componentWillUnmount() {
//     // cleanup logic
//   }

//   // Order.jsx
//   handleEditClick = (id) => {
//     console.log('Edit was clicked for', id);
//   }

//   render() {
//     return (
//       <OrderConsumer orderId={1}>
//         {(order) => (<>
//           <Panel title={order.name}>
//             <h2>Line Items</h2>
//             <div>
//               {order.lineItems.map(lineItem =>
//                 <LineItem key={lineItem.id} onEditClick={this.handleEditClick}
//                   item={lineItem} />
//               )}
//             </div>
//           </Panel>
//         </>)
//         }
//       </OrderConsumer>
//     );
//   }
// }



// Example: Higher Order Component

// class OrderInternal extends React.Component {
//   handleEditClick = (id) => {
//     console.log('Edit was clicked for', id);
//   }
//   render() {
//     return (
//       <Panel title={this.props.order.name}>
//         <h2>Line Items</h2>
//         <div>
//           {this.props.order.lineItems.map(lineItem =>
//             <LineItem key={lineItem.id} onEditClick={this.handleEditClick}
//               item={lineItem} />
//           )}
//         </div>
//       </Panel>
//     );
//   }
// }

// export const Order = withOrderFromService(OrderInternal);



// Example: Hook example

export const Order = ({ orderId }) => {
  const [order] = useOrderService(orderId);

  const handleEditClick = React.useCallback((id) => {
    console.log('Edit was clicked for', id);
  });

  if (!order) {
    return (<div>Loading...</div>);
  }
  return (
    <Panel title={order.name}>
      <h2>Line Items</h2>
      <div>
        {order.lineItems.map(lineItem =>
          <LineItem key={lineItem.id} onEditClick={handleEditClick}
            item={lineItem} />
        )}
      </div>
    </Panel>
  );
}

