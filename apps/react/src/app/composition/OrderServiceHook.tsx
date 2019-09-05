import React from 'react';
import { OrderService } from '../Order/OrderService';

export const useOrderService = (orderId: number) => {
  const [order, setOrder] = React.useState();
  const orderService =
    React.useMemo(() => new OrderService(), []);

  React.useEffect(() => {
    orderService.getOrder(orderId)
      .then(o => setOrder(o));
  }, [orderId]);

  return [order];
}

