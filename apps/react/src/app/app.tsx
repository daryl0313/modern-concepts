import React from 'react';
import { GrandParent } from './components/GrandParent';

import './app.css';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App Component</h1>

      <GrandParent />
    </div>
  );
};

export default App;
