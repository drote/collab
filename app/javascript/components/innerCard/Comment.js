import React from 'react';
import moment from 'moment';
import CommentForm from './CommentForm';

class Comment extends React.Component {
	state = {
		editing: false,
	}

	handleEdit = (text) => {
		this.props.onSubmit(this.props.id, { text });
		this.setState({editing: false});
	}

	render() {
		const klass = this.state.editing ? 'edit-activity' : '';

		return (
			  <li className={klass}>
				  <div className="member-container">
				    <div className="card-member">UN</div>
				  </div>
				  <h3>USERNAME</h3>
			{
				this.state.editing ? 
					<CommentForm
						text={this.props.text}
						onSubmit={this.handleEdit}
						editForm={true}
						onCancel={() => this.setState({editing: false})}
					/>
			:	
					<React.Fragment>
					  <div className="comment static-comment">
					  	<span>{this.props.text}</span>
					  </div>
					  <small>
					    {moment(this.props.created_at, "YYYYMMDD").fromNow()} - 
					    <span
					    	className="link"
					    	onClick={() => this.setState({editing: true})}
					    >
					    	Edit
					    </span> - 
					    <span className="link" onClick={() => onDelete(this.props.id)}>Delete</span>
					  </small>
					</React.Fragment>
			}
				</li>
		);
	}
}

export default Comment;