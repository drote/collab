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

class DueDate extends React.Component {
  state = {
    checked: this.props.completed,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.completed
    });
  }

  toggleChecked = () => {
    this.props.onUpdateCard({completed: !this.props.completed})
  }

  render() {
    const { dueDate, completed, onToggleEditDate } = this.props;
    if (!dueDate) return null;

    const dateClass = getDateClass(dueDate, completed);
    return (
      <li
        className="due-date-section"
      >
        <h3>Due Date</h3>
        <div id="dueDateDisplay" className={dateClass}>
          <input
            id="dueDateCheckbox"
            type="checkbox"
            className="checkbox"
            checked={this.state.checked}
            onChange={this.toggleChecked}
          />
        	<span
            onClick={onToggleEditDate}
          >
            {moment(dueDate).format('MMM D [at] hh:mm a')}
          </span>
        	<span>{ dateClass === 'overdue' ? '(past due)' : ''}</span>
        </div>
      </li>
    );
  }
}

export default DueDate;