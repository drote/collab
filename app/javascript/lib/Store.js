import { createStore as cs, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import boardsReducer from '../reducers/boardsReducer';
import listsReducer from '../reducers/listsReducer';
import cardsReducer from '../reducers/cardsReducer';
import commentsReducer from '../reducers/commentsReducer';
import actionsReducer from '../reducers/actionsReducer';

function reducer(state = {}, action) {
  return {
    boards: boardsReducer(state.boards, action),
    lists: listsReducer(state.lists, action),
    cards: cardsReducer(state.cards, action),
    comments: commentsReducer(state.comments, action),
    actions: actionsReducer(state.actions, action)
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export function createStore(initialState = {}) {
  return cs(reducer, initialState, composeEnhancers(applyMiddleware(ReduxThunk)));
}
