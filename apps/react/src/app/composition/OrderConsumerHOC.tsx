import * as React from 'react';
import { OrderService } from '../Order/OrderService';
import { Order } from '../order/order.types';
import { OrderConsumer } from './OrderConsumer';

interface IPassThruProps {
  order: Order;
}
interface IWithOrderFromServiceProps {
  orderId: number;
}
export const withOrderFromService
  = (Component: React.ComponentType<IPassThruProps>) => {
    return (props: IWithOrderFromServiceProps) => {
      const { orderId, ...otherProps } = props;
      return (
        <OrderConsumer orderId={orderId}>
          {(order) => (<Component order={order} {...otherProps} />)}
        </OrderConsumer>
      );
    }
  }

