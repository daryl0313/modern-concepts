import * as React from 'react';

export interface IMultipleCompositionProps {
  child1: JSX.Element;
  child2: (count: number) => JSX.Element;
}

interface IMultipleCompositionState {
  count: number;
}

export class MultipleCompositionComponent extends React.Component<IMultipleCompositionProps, IMultipleCompositionState> {
  state: IMultipleCompositionState = {
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
