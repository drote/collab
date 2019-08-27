import React from 'react';
import moment from 'moment';
import CardDescription from './CardDescription';

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

const dueDateTemplate = (dueDate, completed) => {
  if (!dueDate) return null;

  const dateClass = getDateClass(dueDate, completed);

  return (
    <li className="due-date-section">
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={dateClass}>
        <input id="dueDateCheckbox" type="checkbox" className="checkbox" defaultChecked={false} />
      	{moment(dueDate).format('MMM D [at] hh:mm a')}
      	<span>{ dateClass === 'overdue' ? '(past due)' : ''}</span>
      </div>
    </li>
  );
}

const getDateClass = (dueDate, completed) => {
	if (completed) {
		return ' completed';
	} else if (moment(dueDate).isBetween(moment(), moment().subtract(2, 'days'))) {
		return ' due-soon';
	} else if (moment().isAfter(dueDate)) {
		return ' overdue';
	} else {
		return 'due-later';
	}
};

const DetailsSection = ({ labels, due_date, completed, description, onUpdateCard }) => {	
	return (
    <li className="details-section">
    
      <ul className="modal-details-list">
        { cardLabels(labels) }
        { dueDateTemplate(due_date, completed) }
      </ul>
      
      <CardDescription
        description={description}
        onSubmit={onUpdateCard}
      />

    </li>
	);
}

export default DetailsSection;