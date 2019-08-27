import React from 'react';
import CardBucket from '../card/CardBucket';

class ListWrapper extends React.Component {
  state = {
    showDropdown: false,
    editingTitle: false,
    addCardFormOpen: false,
    title: this.props.title
  }

  handleInputChange = (evt) => {
    this.setState({
      title: evt.target.value,
    });
  }

  handleOnBlur = () => {
    if (!this.state.title.trim()) {
      this.setState({title: this.props.title})
      return;
    }

    this.setState({
      editingTitle: false,
    });

    this.props.onBlur(this.state.title);
  }

  handleToggleCardFormClick = () => {
    this.setState({addCardFormOpen: !this.state.addCardFormOpen})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

  render() {
    return (
      <div className={this.state.addCardFormOpen ? "list-wrapper add-dropdown-active" : "list-wrapper"}>
          <div className="list-background">
              <div className="list">
                  <a className="more-icon sm-icon" href=""></a>

                  <div>

                    {
                      this.state.editingTitle ?
                        <input
                          type="text"
                          className="list-title"
                          value={this.state.title}
                          onChange={this.handleInputChange}
                          onBlur={this.handleOnBlur}
                        />
                      :
                        <p 
                          className="list-title"
                          onClick={() => this.setState({
                            editingTitle: true
                          })}

                        >
                          {this.state.title}
                        </p>
                    }
                    
                  </div>

                  {
                      this.state.showDropdown ?

                      <div 
                        className="add-dropdown add-top"
                        onclick={() => this.setState({
                          showDropdown: !this.state.showDropdown,
                        })}
                      >
                          <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                          <div className="add-options"><span>...</span>
                          </div>
                      </div>

                      :

                      null
                  }
                  
                  <CardBucket
                    listId={this.props.id}
                    onToggleForm={this.handleToggleCardFormClick}
                    onFormSubmit={this.props.onAddCardSubmit}
                  />

              </div>
          </div>
      </div>
    );
  }
};

export default ListWrapper;
