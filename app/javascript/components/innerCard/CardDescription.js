import React from 'react';

class CardDescription extends React.Component {
	state = {
		editing: false,
		description: this.props.description,
	}

	handleChange = (evt) => {
		this.setState({
			description: evt.target.value
		});
	}

	onSubmit = () => {
		this.props.onSubmit({
			description: this.state.description,
		});

		this.toggleEdit();
	}

	toggleEdit = () => this.setState({editing: !this.state.editing})

	componentWillReceiveProps({ description }) {
		this.setState({description});
	}

	descriptionField(editing, currentDescription) {
		const defaultText = 'Add a description...';

    return editing ? (
    	<React.Fragment>
	      <textarea
	      	className="textarea-toggle"
	      	rows="1"
	      	defaultValue={currentDescription || defaultText}
	      	onChange={this.handleChange}
	      />
	      <div>
	        <div className="button" value="Save" onClick={this.onSubmit}>Save</div>
	        <i className="x-icon icon" onClick={this.toggleEdit}></i>
	      </div>
	    </React.Fragment>
		) : (
			<React.Fragment>
		    <span id="description-edit" className="link" onClick={this.toggleEdit}>Edit</span>
		    <p className="textarea-overlay" onClick={this.toggleEdit}>
		    	{currentDescription || defaultText}
		    </p>
	    </React.Fragment>
	  )
	}

	render() {
		return (
      <form className="description">
        <p>Description</p>
        {this.descriptionField(this.state.editing, this.state.description)}
        <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
        </p>
      </form>
		);
	}
}

export default CardDescription;
