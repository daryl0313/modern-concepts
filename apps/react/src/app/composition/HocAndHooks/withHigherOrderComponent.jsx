import React from 'react';
import { MyService } from "./MyService";

class WrapperComponent extends React.Component {
  state = { myValue: '' };

  // This could probably be injected by seperate HOC for better composition
  thisService = new MyService();

  helperFunction = (newValue) => {
    this.setState({
      myValue: newValue + '(This is from WrapperComponent)'
    });
  }

  render() {
    return (
      this.props.children(this.thisService, this.helperFunction, this.state.myValue)
    );
  }
}

export function withHocExample(Component) {
  return () => (
    <WrapperComponent>
      {(service, helperFunction, value) => {
        return (
          <>
            <div style={{ color: 'red' }}>This was added by the Higher Order Comopnent</div>
            <Component service={service} helperFunction={helperFunction} hocValue={value} />
          </>
        );
      }}
    </WrapperComponent>
  );
}
