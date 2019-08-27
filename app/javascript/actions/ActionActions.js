import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

function addActionSuccess(action) {
  return { type: types.ADD_ACTION_SUCCESS, action};
}

export default function addAction(cardAction) {
  return function(dispatch) {
    apiClient.addAction(cardAction, returnedAction => {
      dispatch(addActionSuccess(returnedAction));
    })
  }
}
