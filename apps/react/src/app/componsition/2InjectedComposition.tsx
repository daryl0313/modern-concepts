import * as React from 'react';

interface IWrapperComponentProps {
  children: (count: number) => JSX.Element;
}

interface IWrapperComponentState {
  count: number;
}

class WrapperComponent extends React.Component<IWrapperComponentProps, IWrapperComponentState> {
  state: IWrapperComponentState = {
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
          {this.props.children}
        </div>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export class InjectedComposition extends React.Component {
  public render() {
    return (
      <WrapperComponent>
        {
          (count: number) => {
            return (<div>Please render this content with count {count}!</div>);
          }
        }
      </WrapperComponent>
    );
  }
}
