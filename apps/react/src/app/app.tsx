import React from 'react';
import { Parent } from './Parent';

import './app.css';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>👴 Grandparent Component</h1>
      <Parent />
    </div>
  );
};

export default App;
