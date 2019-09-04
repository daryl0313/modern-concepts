// Order.jsx
import React from 'react';
import { LineItem } from './LineItem';

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
      <>
      <div>
          Name: {this.state.order.name}
      </div>
      <div>
          Line Items:
          {this.state.order.lineItems.map(lineItem =>
              // Order.jsx
              <LineItem onEditClick={this.handleEditClick}
                  item={lineItem} />
          )}
      </div>
  </>
);
  }
}

