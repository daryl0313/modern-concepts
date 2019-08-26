import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
interface ISimpleCompositionProps {
}

export class SimpleCompositionComponent extends React.Component<ISimpleCompositionProps> {
  public render() {
    return (
      <div>
        <h1>Wrapper Component</h1>
        <div>
          <h2>Child Content</h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}
