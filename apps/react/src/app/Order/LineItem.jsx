// LineItems.jsx
import React from 'react';
import PanelMultipleChildren from '../composition/Panel/PanelMultipleChildren';

export function LineItem(props) {
  const handleEditClick = React.useCallback(() => {
    props.onEditClick(props.item.id);
  }, [props.item.id]);

  // LineItem.jsx
  return (
    <PanelMultipleChildren
      title={<h3>{props.item.name}</h3>}
      body={<>
        <div>Description: {props.item.description}</div>
        <div>Price: ${props.item.price}</div>
        <div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      </>}
    />
  );
}

