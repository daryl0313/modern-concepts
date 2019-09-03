import React from 'react';

// Address.jsx
export class Address extends React.PureComponent {
    render() {
        return (
            <div>
                <div>{this.props.street1}</div>
                {this.props.street2
                    && <div>{this.props.street2}</div>
                }
                <div>{this.props.city}, {this.props.state} {this.props.zip}</div>
            </div>
        );
    }
}

export const AddressFC = React.memo((props) => {
    return (
        <div>
            <div>{props.street1}</div>
            {props.street2
                && <div>{props.street2}</div>
            }
            <div>{props.city}, {props.state} {props.zip}</div>
        </div>
    );
})