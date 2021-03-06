import React from 'react';

const AddButtons = (props) => {
	return (
    <ul>
      <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
      
      <li
      	className="label-button"
      	onClick={props.onToggleEditLabels}
      >
      	<i className="label-icon sm-icon"></i>
      	Labels
      </li>
      
      <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
      
      <li
      	className="date-button"
      	onClick={props.onToggleEditDate}
      >
      	<i className="clock-icon sm-icon"></i>
      	Due Date
      </li>

    </ul>
	);
}

export default AddButtons;