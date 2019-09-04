// Order.jsx
import React from 'react';
import { LineItem } from './LineItem';
import { Panel } from '../composition/Panel/Panel'

export class Order extends React.Component {
  state = {};

  async componentDidMount() {
    const o = await this.props
      .orderService.getOrder(1);
    this.setState({ order: o });
  }
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
    if (!this.state.order) {
      return (<div>Loading...</div>);
    }

    return (
      <Panel title={this.state.order.name}>
        <h2>Line Items</h2>
        <div>
          {this.state.order.lineItems.map(lineItem =>
            <LineItem key={lineItem.id} onEditClick={this.handleEditClick}
              item={lineItem} />
          )}
        </div>
      </Panel>
    );
  }
}

