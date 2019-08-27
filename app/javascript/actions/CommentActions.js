import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';

function addCommentSuccess(comment) {
	return { type: types.ADD_COMMENT_SUCCESS, comment }
}

function deleteCommentSuccess(id) {
	return { type: types.DELETE_COMMENT_SUCCESS, id }
}

function addCommentFailure() {
	return { type: types.ADD_COMMENT_FAILURE }
}

function deleteCommentFailure() {
	return { type: types.DELETE_COMMENT_FAILURE }
}

function updateCommentFailure() {
	return { type: types.EDIT_COMMENT_FAILURE }
}

function updateCommentSuccess(comment) {
	return { type: types.EDIT_COMMENT_SUCCESS, comment}
}

export function addComment(newComment) {
	return function(dispatch) {
		apiClient.addComment(newComment, returnedComment => {
			dispatch(addCommentSuccess(returnedComment));
		}).catch(dispatch(addCommentFailure));
	};
}

export function deleteComment(id) {
	return function(dispatch) {
		apiClient.deleteComment(id, _ => {
			dispatch(deleteCommentSuccess(id));
		}).catch(dispatch(deleteCommentFailure));
	}
}

export function updateComment(id, attrs) {
	return function(dispatch) {
		apiClient.updateComment(id, attrs, returnedComment => {
			dispatch(updateCommentSuccess(returnedComment));
		}).catch(dispatch(updateCommentFailure));
	}
}
