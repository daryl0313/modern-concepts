import React from 'react';
import { Order } from './Order/Order';
import { OrderService } from './Order/OrderService';

import './app.css';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App Component</h1>

      <Order orderService={new OrderService()} />

    </div>
  );
};

export default App;
