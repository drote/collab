import React from 'react';
import { connect } from 'react-redux';

import ActivityList from './ActivityList';
import { getActivitiesForCard } from '../../lib/selectors';
import * as actions from '../../actions/CommentActions';

const mapStateToProps = (state, ownProps) => {
	return {
		activities: getActivitiesForCard(state, ownProps.id),
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onDelete: (id) => dispatch(actions.deleteComment(id)),
		onSubmit: (id, attrs) => dispatch(actions.updateComment(id, attrs))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);