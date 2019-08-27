import React from 'react';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';

import DetailsSection from '../innerCard/DetailsSection';
import CommentFormContainer from '../innerCard/CommentFormContainer';
import ActivityListContainer from '../innerCard/ActivityListContainer';
import Header from '../innerCard/Header';
import ButtonsList from '../innerCard/ButtonsList';
import DatePopover from '../shared/DatePopover';
import LabelsPopover from '../shared/LabelsPopover';

class CardModal extends React.Component {
  state = {
    editingDate: false,
    editingLabels: false
  }

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

  handleToggleEditDate = () => {
    this.setState({
      editingDate: !this.state.editingDate
    });
  }

  handleToggleEditlabels = () => {
    this.setState({
      editingLabels: !this.state.editingLabels
    });
  }

  render() {
    if (!this.props.card) return null;

    if (this.state.deleted) {
      return (
        <Redirect to={`/boards/${this.props.boardId}`} />
      )
    }

    const { title, list_name, ...card } = this.props.card;
    return (
      <div id="modal-container">
        <div
          className="screen"
          onClick={() => this.props.history.goBack()}
        ></div>
        <div id="modal">

          <Link to={`/boards/${card.board_id}`}>
            <i className="x-icon icon close-modal"></i>
          </Link>
          {
            card.archived ?
              <div className="archived-banner"><i className="file-icon icon"></i>This card is archived.</div> :
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
                onToggleEditDate={this.handleToggleEditDate}
                onToggleEditLabels={this.handleToggleEditlabels}
              />

              {this.commentForm(card.id)}

              <ActivityListContainer id={card.id} />
            </ul>

          </section>

          <ButtonsList
            card={card}
            onUpdateCard={this.props.onUpdateCard}
            onToggleEditDate={this.handleToggleEditDate}
            onToggleEditLabels={this.handleToggleEditlabels}
            onDeleteCard={this.props.onDeleteCard}
          />

          { this.state.editingDate ?
              <DatePopover
                onUpdateCard={this.props.onUpdateCard}
                closePopover={() => this.setState({editingDate: false})}
                onRemoveDueDate={this.props.onRemoveDueDate}
              />
            :
              null
          }

          { this.state.editingLabels ?
              <LabelsPopover
              labels={card.labels}
              onHandleLabelClick={this.props.onUpdateCard}
              closePopover={() => this.setState({editingLabels: false})}
              />
            :
              null
          }
        </div>
      </div>
    );
  }
}

export default CardModal;
