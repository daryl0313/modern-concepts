import * as React from 'react';

interface IInjectedCompositionProps {
  children: (count: number) => JSX.Element;
}

interface IInjectedCompositionState {
  count: number;
}

export class InjectedCompositionComponent extends React.Component<IInjectedCompositionProps, IInjectedCompositionState> {
  state: IInjectedCompositionState = {
    count: 0
  };

  private handleClick = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  public render() {
    return (
      <div>
        <h1>Wrapper Component</h1>
        <div>
          <h2>Child Content</h2>
          {this.props.children(this.state.count)}
        </div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
