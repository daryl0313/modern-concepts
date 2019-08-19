import React from 'react';

// export class Double extends React.Component {
//   render() {
//     const output = props.value * 2;
//     return (<div>{{ output }}</div>);
//   }
// }

export const Double = (props) => {
  const output = props.value * 2;
  return (<div>{{ output }}</div>);
}
