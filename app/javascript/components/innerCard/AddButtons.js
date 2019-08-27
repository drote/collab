import React from 'react';
import DatePopover from '../shared/DatePopover';

class AddButtons extends React.Component {
	state = {
		editingDate: false,
	}

	render() {
		return (
	    <ul>
	      <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
	      <li className="label-button"><i className="label-icon sm-icon"></i>Labels</li>
	      <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
	      
	      <li
	      	className="date-button"
	      	onClick={() => this.setState({editingDate: !this.state.editingDate})}
	      >
	      	<i className="clock-icon sm-icon"></i>
	      	Due Date
	      	{ this.state.editingDate ?
	      			<DatePopover
	      				onUpdateCard={this.props.onUpdateCard}
	      			/>
	      		:
	      			null
	      	}
	      </li>

	      <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
	    </ul>
		);
	}
}

export default AddButtons;