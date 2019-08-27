import React from 'react';
import moment from 'moment';
import { initPikaday } from '../../lib/pikaday';

class DatePopover extends React.Component {
	componentDidMount() {
		this.pikaday = initPikaday(
			document.querySelector(".datepicker-select-date input"),
			document.getElementById('calendar-widget')
		)
	}

	render() {
		return (
			<React.Fragment>
				<div style={{top: '100px', right: '100px'}} className="popover due-date">
				  <header>
				    <span>Change due date</span>
				    <a
				    	href="#"
				    	className="icon-sm icon-close"
				    	onClick={this.props.closePopover}
				    >
				    </a>
				  </header>
				  <div className="content">
				    <form>
				      <div className="datepicker-select">
				        <div className="datepicker-select-date">
				          <label>
				            Date
				            <input type="text" placeholder="Enter date" autoFocus />
				          </label>
				        </div>
				        <div className="datepicker-select-time">
				          <label>
				            Time
				            <input type="text" placeholder="Enter time" value="12:00 PM" />
				          </label>
				        </div>
				        <div id="calendar-widget"></div>
				      </div>
				      <button
				      	className="button"
				      	type="submit"
				      	onClick={() => {
				      		this.props.onUpdateCard({
				      			due_date: this.pikaday.toString()
				      		});
				      		this.props.closePopover();
				      	}}
				      >
				      	Save
				      </button>
				      <button
				      	className="button red-button"
				      	type="reset"
				      	onClick={() => {
				      		this.props.onUpdateCard({
				      			due_date: null
				      		});
				      		this.props.closePopover();
				      	}}
				      >Remove
				      </button>
				    </form>
				  </div>
				</div>
			</React.Fragment>
		)
	}
}

export default DatePopover;