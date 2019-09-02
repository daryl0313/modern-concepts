// LineItems.jsx
import React from 'react';

export function LineItem(props) {
    const handleEditClick = React.useCallback(() => {
        // LineItem.jsx
        this.props.onEditClick(props.item.id);
    }, [props.item.id]);
    return (
        <>
            <div>Name: {props.item.name}</div>
            <div>Description: {props.item.description}</div>
            <div>Price: ${props.item.price}</div>
            <div>
                <button onClick={handleEditClick}>Edit</button>
            </div>
        </>
    );
}

