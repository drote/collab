export default function cardsReducer(state = [], action) {
	switch (action.type) {
		case 'FETCH_BOARD_SUCCESS':
			const cardsWithoutCurrentCards = state.filter(c => c.board_id !== action.board.id)
			let extractedCards = action.board.lists.reduce((all, l) => {
				all = all.concat(l.cards);
				return all;
			}, []);

			return cardsWithoutCurrentCards.concat(extractedCards);
		case 'ADD_CARD_SUCCESS':
			return [...state, action.card];
		case 'UPDATE_CARD_SUCCESS':
			return state.filter(c => c.id !== action.card.id).concat(action.card);
		case 'GET_CARD_SUCCESS':
			const { comments, ...cardWithoutComments } = action.card;
			return state.filter(c => c.id !== action.card.id).concat({...cardWithoutComments});
		case 'UPDATE_CARD_FAILURE':
			return state.map(c => c.id === action.id ? {...c} : c);
		default:
			return state;
	}
}
