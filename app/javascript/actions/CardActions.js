import apiClient from '../lib/ApiClient';
import * as types from '../constants/ActionTypes';
import addAction from './ActionActions';

function addCardSuccess(card) {
	return { type: types.ADD_CARD_SUCCESS, card }
}

function addCardFailure() {
	return { type: types.ADD_CARD_FAILURE }
}

function getCardSuccess(card) {
	return { type: types.GET_CARD_SUCCESS, card }
}

function getCardFailure() {
	return { type: types.GET_CARD_FAILURE }
}

function updateCardSuccess(card) {
	return { type: types.UPDATE_CARD_SUCCESS, card }
}

function updateCardFailure(cardId) {
	return { type: types.UPDATE_CARD_FAILURE }
}

function deleteCardSuccess(cardId) {
	return { type: types.DELETE_CARD_SUCCESS, id: cardId }
}

function deleteCardFailure(cardId) {
	return { type: types.DELETE_CARD_FAILURE }
}

export function addCard(card) {
	return function(dispatch) {
		apiClient.addCard(card, returnedCard => {
			dispatch(addCardSuccess(returnedCard));
		}).catch(() => {
			dispatch(addCardFailure());
		});
	}
}

export function getCard(cardId) {
	return function(dispatch) {
		apiClient.getCard(cardId, returnedCard => {
			dispatch(getCardSuccess(returnedCard));
		}).catch(() => {
			dispatch(getCardFailure());
		});
	}
}

export function updateCard(cardId, attrs) {
	return function(dispatch) {
		apiClient.updateCard(cardId, attrs, returnedCard => {
			dispatch(updateCardSuccess(returnedCard));
		}).catch(() => {
			dispatch(updateCardFailure(cardId));
		});
	}
}

export function deleteCard(cardId) {
	return function(dispatch) {
		apiClient.deleteCard(cardId, res => {
			dispatch(deleteCardSuccess(res.id));
		}).catch(() => {
			dispatch(deleteCardFailure(cardId));
		});
	}
}
