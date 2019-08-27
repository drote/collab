

export const getListsFromBoard = (state, boardId) => {
  console.log(boardId);
  return state.lists.filter(l => l.board_id === boardId);
}

export const getCardsFromList = (state, listId) => {
	return state.cards.filter(c => {
    return c.list_id === listId && !c.archived;
  });
}

export const getBoardIdForCard = (state, cardId) => {
  if (state.cards.length > 0) {
    return state.cards.find(c => c.id === cardId).board_id;
  } else {
    return undefined;
  }
};

export const getActivitiesForCard = (state, cardId) => {
	const comments = state.comments.filter(c => c.card_id === cardId);
  const actions = state.actions.filter(a => a.card_id === cardId);
	const activities = [...comments, ...actions].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return activities;
}