import React from 'react';
import { connect } from 'react-redux';
import CardsInList from './CardsInList';
import { getCardsFromList } from '../../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    cards: getCardsFromList(state, ownProps.listId),
    listId: ownProps.listId
  };
}

export default connect(mapStateToProps, null)(CardsInList);
