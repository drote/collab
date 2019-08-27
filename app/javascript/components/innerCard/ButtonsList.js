import React from 'react';
import AddButtons from './AddButtons';
import ActionButtons from './ActionButtons';

const ButtonsList = (props) => {
	return (
    <aside className="modal-buttons">
      <h2>Add</h2>
      	<AddButtons
          onUpdateCard={props.onUpdateCard}
          onToggleEditDate={props.onToggleEditDate}
          onToggleEditLabels={props.onToggleEditLabels}
        />
      <h2>Actions</h2>
      	<ActionButtons
					card={props.card}
					onUpdateCard={props.onUpdateCard}
          onDeleteCard={props.onDeleteCard}
				/>

      <ul className="light-list">
        <li className="not-implemented">Share and more...</li>
      </ul>
    </aside>
	);
}

export default ButtonsList;
