import React from 'react';
import { withHocExample } from './withHigherOrderComponent';
import { HooksExample } from "./HooksExample";

class HigherOrderComponentChild extends React.Component {
  useService = async () => {
    const response = await this.props.service.getMyData();
    console.log('response done', response);
  }

  myFunction = () => {
    this.props.helperFunction('A new value');
  }

  render() {
    return (
      <button onClick={this.myFunction}>
        {this.props.hocValue || 'Click Me (HOC)'}
      </button>
    )
  }
}

export const HigherOrderComponentConsumer = withHocExample(HigherOrderComponentChild);


export function HookConsumer() {
  const [service, helperFunc, value] = HooksExample();

  const useService = React.useCallback(async () => {
    const response = await service.getMyData();
    console.log('response done', response);
  }, [service]);

  const myFunction = React.useCallback(() => {
    helperFunc('A new value');
  }, [helperFunc]);

  return (
    <button onClick={myFunction}>
      {value || 'Click Me (Hook)'}
    </button>
  )
}
