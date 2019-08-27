import React from 'react';
import { connect } from 'react-redux';

import CommentForm from './CommentForm';
import * as actions from '../../actions/CommentActions';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onSubmit: (text) => {
			dispatch(actions.addComment({
				card_id: ownProps.cardId,
				text
			}));
		}
	}
}

export default connect(null, mapDispatchToProps)(CommentForm);