import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import  * as actions from  '../../actions/BoardActions';
import { addList } from '../../actions/ListActions';
import Board from './Board';
import { getBoardIdForCard } from '../../lib/selectors';

const mapStateToProps = (state, ownProps) =>{
  let id;
  let card;

  if (ownProps.match.url.match(/\/cards/)) {
    card = state.cards.find(c => c.id === +ownProps.match.params.id);

    if (card) {
      id = getBoardIdForCard(state, +ownProps.match.params.id);
    }
  } else {
    id = +ownProps.match.params.id;
  }

  const board = state.boards.find(board => ( board.id === id ));

  return {
    id,
    board,
    card,
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  	fetchBoard: (id) => {
      dispatch(actions.fetchBoard(id))
    },

		addList: (title) => {
			dispatch(addList({
				title,
				board_id: id
			}))
		},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
