import React from 'react';
import CardDescription from './CardDescription';
import DueDate from './DueDate';

const getLabels = (labels) => {
	return labels.map((l, i) => {
    return (
      <div key={i} className="member-container">
        <div className={`${l} label colorblindable`}></div>
      </div>
    );
	});
}

const cardLabels = (labels) => {
  if (!labels.length) {
    return null;
  }

  return (
    <li className="labels-section">
      <h3>Labels</h3>
      { getLabels(labels) }
      <div className="member-container"><i className="plus-icon sm-icon"></i>
      </div>
    </li>
  );
}

const DetailsSection = ({ 
  labels,
  due_date,
  completed,
  description,
  onUpdateCard,
  onToggleEditDate
}) => {	
	return (
    <li className="details-section">
    
      <ul className="modal-details-list">
        { cardLabels(labels) }
        <DueDate
          dueDate={due_date}
          completed={completed}
          onToggleEditDate={onToggleEditDate}
          onUpdateCard={onUpdateCard}
        />
      </ul>
      
      <CardDescription
        description={description}
        onSubmit={onUpdateCard}
      />

    </li>
	);
}

export default DetailsSection;