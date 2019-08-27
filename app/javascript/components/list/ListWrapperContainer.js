import React from 'react';
import { connect } from 'react-redux';

import ListWrapper from './ListWrapper';
import { editList, addList } from '../../actions/ListActions';
import { addCard } from '../../actions/CardActions';

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.list.id;
	return {
		title: state.lists.find(l => l.id === id).title,
		id
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const id = ownProps.list.id;

	return {
		onBlur: (title) => {
			dispatch(editList({ title, id }));
		},
		onAddCardSubmit: (title) => {
			dispatch(addCard({
				title,
				list_id: id
			}));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListWrapper);
