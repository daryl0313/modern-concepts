import React from 'react';
import { GrandParent } from './components/GrandParent';
import { PureClassComponent, PureFunctionComponent } from "./pureComponent/PureComponentExamples";
import Composition from './composition/Composition';

import './app.css';

export const App = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>App Component</h1>

      <GrandParent />?

      {/* <PureClassComponent displayThisValue="Value" />
      <br />
      <PureFunctionComponent displayThisValue="Value" /> */}

      {/* <Composition /> */}
    </div>
  );
};

export default App;
