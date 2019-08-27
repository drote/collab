import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

import DetailsSection from '../innerCard/DetailsSection';
import CommentFormContainer from '../innerCard/CommentFormContainer';
import ActivityListContainer from '../innerCard/ActivityListContainer';
import Header from '../innerCard/Header';
import ButtonsList from '../innerCard/ButtonsList';

class CardModal extends React.Component {
  componentDidMount() {
    this.props.fetchCard();
  }

  commentForm(id) {
    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">TP</div>
          </div>
        <CommentFormContainer
          cardId={id}
        />
        </div>
      </li>
    ) 
  }

  render() {
    if (!this.props.card) return null;

    const { title, list_name, ...card } = this.props.card;
    return (
      <div id="modal-container">
        <div className="screen"></div>
        <div id="modal">

          <Link to={`/boards/${card.board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>
          {
            card.archived ?
              <div className="archived-banner"><i class="file-icon icon"></i>This card is archived.</div> :
              null
          }

          <Header
            title={title}
            listName={list_name}
            onUpdateCard={this.props.onUpdateCard}
          />

          <section className="modal-main">

            <ul className="modal-outer-list">
              <DetailsSection
                {...card}
                onUpdateCard={this.props.onUpdateCard}
              />

              {this.commentForm(card.id)}

              <ActivityListContainer id={card.id} />
            </ul>

          </section>

          <ButtonsList
            card={card}
            onUpdateCard={this.props.onUpdateCard}
          />

        </div>
      </div>
    );
  }
}

export default CardModal;
