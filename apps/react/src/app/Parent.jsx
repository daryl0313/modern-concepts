import React from "react";
import { Child } from './Child';

export class Parent extends React.Component {
  state = {
    myNumberValue: 6,
    myDateValue: new Date(),
    myArray: []
  };

  handleNumberOutput = (newNumberValue) => {
    this.setState({
      myNumberValue: newNumberValue
    });
  }

  getCustomDate = () => {
    return this.state.myDateValue.toLocaleString();
  }

  childRef = React.createRef();

  render() {
    const hostStyles = {
      border: 'solid 1px navy',
      margin: '5px'
    };

    return (
      <div style={hostStyles}>
        <h2>👩 Parent Component</h2>

        <Child ref={this.childRef} stringInput="This is my string input value" numberInput={this.state.myNumberValue} onNumberOutputChange={this.handleNumberOutput} />

        Custom Date: <div>{this.getCustomDate()}</div>

        {this.state.myNumberValue && <div>...</div>}

        {this.state.myArray.map(v => <div key={v.id}>{v.name}</div>)}
      </div>
    );
  }
}
