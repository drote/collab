import React from 'react';
import moment from 'moment';

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

const DueDate = ({ dueDate, completed, onToggleEditDate }) => {
  if (!dueDate) return null;

  const dateClass = getDateClass(dueDate, completed);

  return (
    <li
      className="due-date-section"
      onClick={onToggleEditDate}
    >
      <h3>Due Date</h3>
      <div id="dueDateDisplay" className={dateClass}>
        <input id="dueDateCheckbox" type="checkbox" className="checkbox" defaultChecked={false} />
      	{moment(dueDate).format('MMM D [at] hh:mm a')}
      	<span>{ dateClass === 'overdue' ? '(past due)' : ''}</span>
      </div>
    </li>
  );
}

export default DueDate;