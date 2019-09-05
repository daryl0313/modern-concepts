import * as React from 'react';
import { OrderService } from '../Order/OrderService';
import { Order } from '../order/order.types';

interface IOrderConsumerProps {
  orderId: number;
  children: (order: Order) => JSX.Element;
}
interface IOrderConsumerState {
  order?: Order
}
export class OrderConsumer
  extends React.Component<IOrderConsumerProps, IOrderConsumerState> {
  state: IOrderConsumerState = {};

  async componentDidMount() {
    const orderService = new OrderService();
    const o = await orderService.getOrder(this.props.orderId);
    this.setState({ order: o });
  }

  public render() {
    if (!this.state.order) {
      return (<div>Loading...</div>);
    }
    return this.props.children(this.state.order);
  }
}
