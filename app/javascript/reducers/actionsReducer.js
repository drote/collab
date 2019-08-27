export default function actionsReducer(state = [], action) {
  switch (action.type) {
		case 'GET_CARD_SUCCESS':
			return state.filter(a => a.card_id !== action.card.id).concat(action.card.actions);
    case 'ADD_ACTION_SUCCESS':
      return state.concat(action.action);
    default:
      return state;
  }
}
