import * as React from 'react';

import './Panel.css';

export interface IPanelMultipleChildrenProps {
  title: JSX.Element;
  body: JSX.Element;
}
export default class PanelMultipleChildren
  extends React.Component<IPanelMultipleChildrenProps>
{
  render() {
    return (
      <div className="panel">
        <div className="panel-title">
          {this.props.title}
        </div>
        <div className="panel-body">
          {this.props.body}
        </div>
      </div>
    );
  }
}
