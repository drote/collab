export default function listsReducer(state = [], action) {
	switch (action.type) {
		case 'FETCH_BOARD_SUCCESS':
			const listsWithoutCurrentLists = state.filter(l => l.board_id !== action.board.id);

			const currentListWithoutCards = action.board.lists.map(l => {
				const { cards, ...listWithoutCards } = l;
				return listWithoutCards;
			});

			return listsWithoutCurrentLists.concat(currentListWithoutCards);
		case 'EDIT_LIST_SUCCESS':
			return state.map(l => l.id === action.list.id ? action.list : l)
		case 'EDIT_LIST_FAILURE':
			return state.map(l => {
				return (l.id === action.id) ? { ...l } : l;
			});
		case 'ADD_LIST_SUCCESS':
			return state.concat(action.list);
		default:
			return state;
	}
}
