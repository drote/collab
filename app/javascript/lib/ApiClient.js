import axios from 'axios';
import * as routes from '../constants/ApiRoutes';

function logError(errorResponse) {
  const response = errorResponse.response;

  if (response && response.data && response.data.error) {
    console.error(`HTTP Error: ${response.data.error}`);
  } else {
    console.error("Error: ", errorResponse);
  }

  return Promise.reject();
}

function unwrapData(response) {
  return response.data;
}

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = {
  getBoards: function(callback) {
    return axios.get(routes.BOARDS_INDEX_URL)
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  createBoard: function(board, callback) {
    return axios.post(routes.CREATE_BOARD_URL, { board })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getBoard: (id, callback) => {
    return axios.get(routes.getBoardUrl(id))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  editList: (list, callback) => {
    return axios.put(routes.editListUrl(list.id), { title: list.title })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addList: (list, callback) => {
    return axios.post(routes.ADD_LIST_URL, { list })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addCard: (card, callback) => {
    return axios.post(routes.ADD_CARD_URL, { card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  getCard: (cardId, callback) => {
    return axios.get(routes.cardUrl(cardId))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateCard: (cardId, card, callback) => {
    return axios.put(routes.cardUrl(cardId), { card })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addComment: (comment, callback) => {
    return axios.post(routes.ADD_COMMENT_URL, { comment })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  deleteComment: (id, callback) => {
    return axios.delete(routes.commentUrl(id))
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  updateComment: (id, comment, callback) => {
    return axios.put(routes.commentUrl(id), { comment })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  },
  addAction: (action_object, callback) => {
    return axios.post(routes.ADD_ACTION_URL, { card_id: action_object.card_id, text: action_object.text })
      .then(unwrapData)
      .then(callback)
      .catch(logError);
  }
};

export default apiClient;
