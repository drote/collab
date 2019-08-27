import React from 'react';
import { connect } from 'react-redux';
import ExistingLists from './ExistingLists';
import { getListsFromBoard } from '../../lib/selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    lists: getListsFromBoard(state, ownProps.boardId)
  };
}

export default connect(mapStateToProps, null)(ExistingLists);
