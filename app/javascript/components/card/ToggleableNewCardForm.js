import React, { Fragment } from 'react';

class ToggleableNewCardForm extends React.Component {
	state = {
		formOpen: false,
		text: ''
	}

	handleFormToggle = () => {
		this.setState({formOpen: !this.state.formOpen});
		this.props.onToggleForm();
	}

	handleInputChange = (evt) => {
		this.setState({
			text: evt.target.value
		})
	}

	handleAddCardSubmit = (evt) => {
		this.props.onFormSubmit(this.state.text);
		this.handleFormToggle();
		this.setState({text: ''});
	}

	render () {
		const klass = this.state.formOpen ? "add-dropdown add-bottom active-card" : "add-dropdown add-bottom"
		return (
			<Fragment>
				<div className={klass}>
				  <div className="card">
				  	<div className="card-info"></div>

				  	<textarea
				  		name="add-card"
				  		value={this.state.text}
				  		onChange={this.handleInputChange}
				  	>
				  	</textarea>

				  	<div className="members"></div>
					</div>
				
					<a
						className="button"
						onClick={this.handleAddCardSubmit}
					>
						Add
					</a>

					<i
						className="x-icon icon"
						onClick={this.handleFormToggle}
					>
					</i>
				
				  <div className="add-options">
				  	<span>...</span>
				  </div>
				
				</div>
					
				<div
					className="add-card-toggle"
					data-position="bottom"
					onClick={this.handleFormToggle}
				>
					Add a card...
				</div>
		</Fragment>
		)
	}
}

export default ToggleableNewCardForm;

