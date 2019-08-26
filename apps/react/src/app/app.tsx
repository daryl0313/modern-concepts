import React from 'react';
import { GrandParent } from './components/GrandParent';

import './app.css';
import Composition from './composition/Composition';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App Component</h1>

      <GrandParent />

      {/* <Composition /> */}
    </div>
  );
};

export default App;
