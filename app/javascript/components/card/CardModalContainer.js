import React from 'react';
import  * as actions from  '../../actions/CardActions';
import addAction from  '../../actions/ActionActions';
import { connect } from 'react-redux';
import CardModal from './CardModal';
import { getActionText } from '../../lib/helpers';

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const card = state.cards.find(c => c.id === id);

  return {
    card,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = +ownProps.match.params.id;

  return {
    fetchCard: () => dispatch(actions.getCard(id)),
    onUpdateCard: (attrs) => {
      dispatch(actions.updateCard(id, attrs));
      dispatch(addAction({card_id: id, text: getActionText(attrs)}));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
