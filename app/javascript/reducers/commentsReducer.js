export default function commentsReducer(state = [], action) {
	switch (action.type) {
		case 'GET_CARD_SUCCESS':
			return state.filter(c => c.card_id !== action.card.id).concat(action.card.comments);
		case 'ADD_COMMENT_SUCCESS':
			return state.concat(action.comment);
		case 'DELETE_COMMENT_SUCCESS':
			return state.filter(c => c.id !== action.id);
		case 'EDIT_COMMENT_SUCCESS':
			return state.filter(c => c.id !== action.comment.id).concat(action.comment)
		default:
			return state;
	}
}
