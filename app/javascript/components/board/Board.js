import React from 'react';
import ListBucket from '../list/ListBucket';

class Board extends React.Component {
  state = {
    fetchRequestSent: false,
  }

  componentDidMount() {
    if (this.props.id) {
      this.props.fetchBoard(this.props.id);
    }
  }

  componentDidUpdate() {
    if (this.props.card && !this.state.fetchRequestSent) {
      this.fetchBoard(this.props.card.board_id);
    }
  }

  fetchBoard = (id) => {
    this.props.fetchBoard(id);
    this.setState({
      fetchRequestSent: true
    });
  }

  render() {
    if (!this.props.board) {
      return null;
    }

    return (
      <div>
        <header>
          <ul>
            <li id="title">{this.props.board.title}</li>
            <li className="star-icon icon"></li>
            <li className="private private-icon icon">Private</li>
          </ul>
          <div className="menu">
            <i className="more-icon sm-icon"></i>Show Menu</div>
          <div className="subscribed">
            <i className="sub-icon sm-icon"></i>Subscribed</div>
        </header>
        <main>
          <ListBucket addList={this.props.addList} boardId={this.props.id} />
        </main>
      </div>
    );
  }
}

export default Board;
