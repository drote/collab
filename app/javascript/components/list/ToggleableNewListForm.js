import React from 'react';

class ToggleableNewListForm extends React.Component {
  state = {
    isEditing: false,
    title: '',
  };

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleAddTitleClick = () => {
    this.setState({ isEditing: true });
  };

  handleAddClick = () => {    
    this.props.addList(this.state.title, this.props.boardId);

    this.resetState();
  };

  resetState = () => {
    this.setState({
      isEditing: false,
      title: ''
    });
  };

  render() {
    return (
      <div id="new-list" className={this.state.isEditing ? "new-list selected" : "new-list"} onClick={this.handleAddTitleClick}>
        <span>Add a list...</span>
        <input
          type="text"
          placeholder="Add a list..."
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <div>
          <input
            type="submit"
            className="button"
            value="Save"
            onClick={(e) => {
              e.stopPropagation();

              this.handleAddClick()
            }}
          />
        <i className="x-icon icon" onClick={this.resetState}></i>
        </div>
      </div>
    );
  }
}

export default ToggleableNewListForm;
