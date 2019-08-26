import * as React from 'react';

// tslint:disable-next-line:no-empty-interface
interface IWrapperComponentProps {
}

class WrapperComponent extends React.Component<IWrapperComponentProps> {
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

export class SimpleComposition extends React.Component {
  public render() {
    return (
      <WrapperComponent>
          <div>Please render this content!</div>
      </WrapperComponent>
    );
  }
}
