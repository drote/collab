import React from 'react';
import CardDescription from './CardDescription';
import DueDate from './DueDate';
import Labels from './Labels';

const DetailsSection = ({ 
  labels,
  due_date,
  completed,
  description,
  onUpdateCard,
  onToggleEditDate,
  onToggleEditLabels
}) => {	
	return (
    <li className="details-section">
    
      <ul className="modal-details-list">
        <Labels
          labels={labels}
          onToggleEditLabels={onToggleEditLabels}
        />

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