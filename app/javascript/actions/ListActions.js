import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

function editListSuccess(list) {
	return { type: types.EDIT_LIST_SUCCESS, list }
}

function addListRequest() {
	return { type: types.ADD_LIST_REQUEST };
}

function addListSuccess(list) {
	return { type: types.ADD_LIST_SUCCESS, list };
}

function editListFailure(listId) {
	return { type: types.EDIT_LIST_FAILURE, listId }
}

export function editList(editedList) {
	return function(dispatch) {
		apiClient.editList(editedList, returnedList => {
			dispatch(editListSuccess(returnedList));
		}).catch(() => {
			dispatch(editListFailure(editedList.id))
		});
	}
}

export function addList(newList) {
	return function(dispatch) {
		dispatch(addListRequest());
		apiClient.addList(newList, returnedList => {
			dispatch(addListSuccess(returnedList));
		})
	};
}
