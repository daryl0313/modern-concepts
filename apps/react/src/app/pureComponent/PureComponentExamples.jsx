import * as React from 'react';

export class PureClassComponent extends React.PureComponent {
  handleSomeEvent = (newValue) => {
    // 👇 will trigger a re-render
    this.setState({
      myState: newValue
    });
  }
  render() {
    return (
      <div onClick={this.handleSomeEvent}>
        {this.props.displayThisValue}
        {this.state.myState}
      </div>
    );
  }
}

export const PureFunctionComponent = React.memo(props => {
  const [myState, setMyState] = React.useState();

  const handleSomeEvent = React.useCallback(newValue => {
    setMyState(newValue);
  })

  return (
    <div onClick={handleSomeEvent}>
      {props.displayThisValue}
      {myState}
    </div>
  );
});
