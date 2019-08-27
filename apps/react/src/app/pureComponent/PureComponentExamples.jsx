import * as React from 'react';

export class PureClassComponent extends React.PureComponent {
  state = { clickCount: 0 };

  handleSomeEvent = (newValue) => {
    // 👇 will trigger a re-render
    this.setState(prev => ({
      clickCount: prev.clickCount + 1
    }));
  }
  render() {
    return (
      <button onClick={this.handleSomeEvent}>
        Click Me [Class] - (
        {this.props.displayThisValue}:
        {this.state.clickCount}
        )
      </button>
    );
  }
}

/** @type React.FunctionComponent<{ displayThisValue: string }> */
export const PureFunctionComponent = React.memo(props => {
  const [clickCount, setclickCount] = React.useState(0);

  const handleSomeEvent = () => {
    // 👇 will trigger a re-render
    setclickCount(clickCount + 1);
  }

  return (
    <button onClick={handleSomeEvent}>
      Click Me [Function] - (
        {props.displayThisValue}:
        {clickCount}
      )
    </button>
  );
});
