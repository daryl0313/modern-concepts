import * as React from 'react';

export interface IWrapperComponentProps {
  child1: JSX.Element;
  child2: (count: number) => JSX.Element;
}

interface IWrapperComponentState {
  count: number;
}

export class WrapperComponent extends React.Component<IWrapperComponentProps, IWrapperComponentState> {
  state: IWrapperComponentState = {
    count: 0
  };

  private handleClick = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
  }

  public render() {
    return (
      <div>
        <div>Child1: {this.props.child1}</div>
        <div>Child2: {this.props.child2(this.state.count)}</div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export class MultipleComposition extends React.Component {
  render() {
    return (
      <WrapperComponent
        child1={<div>This is the first child</div>}
        child2={(count: number) => <div>This is the second child: {count}</div>}
      />
    );
  }
}
