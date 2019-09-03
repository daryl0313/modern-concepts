import React from 'react';
import './Panel.css';

interface IPanelProps {
  title: string;
}
export class Panel extends React.Component<IPanelProps> {
  render() {
    return (
      <div className="panel">
        <div className="panel-title">
          {this.props.title}
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}
