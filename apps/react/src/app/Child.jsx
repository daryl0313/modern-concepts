import React from 'react';

export const Child = (props) => {
  const handleButtonClick = () => {
    props.onNumberOutputChange(props.numberInput + 2);
  }

  const hostStyles = {
    border: 'solid 1px green',
    margin: '5px'
  };

  return (
    <div style={hostStyles}>
      <h3>🧒 Child Component</h3>

      <div>
        String Input: {props.stringInput}
      </div>
      <div>
        Number Input: {props.numberInput}
      </div>

      <button onClick={handleButtonClick}>Click Me</button>
    </div>
  )
}
