import React from "react";
import { Child } from './Child';

export class Parent extends React.Component {
  state = {
    myNumberValue: 6
  };

  handleNumberOutput = (newNumberValue) => {
    this.setState({
      myNumberValue: newNumberValue
    });
  }

  render() {
    const hostStyles = {
      border: 'solid 1px navy',
      margin: '5px'
    };

    return (
      <div style={hostStyles}>
        <h2>👩 Parent Component</h2>

        <Child stringInput="This is my string input value" numberInput={this.state.myNumberValue} onNumberOutputChange={this.handleNumberOutput} />
      </div>
    );
  }
}
