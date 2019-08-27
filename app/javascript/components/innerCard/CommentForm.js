import React from 'react';

class CommentForm extends React.Component {
  state = {
    text: this.props.text || '',
    editForm: this.props.editForm || false,
  }

  onChange = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.text);
    this.setState({text: ''});
  }

  render() {  
  	return (
      <div className="comment">
        <label>
          <textarea
            required=""
            rows="1"
            placeholder="Write a comment..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <div>
            <a className="light-button card-icon sm-icon"></a>
            <a className="light-button smiley-icon sm-icon"></a>
            <a className="light-button email-icon sm-icon"></a>
            {
              this.state.editForm ?
                null
              :            
                <a className="light-button attachment-icon sm-icon"></a>
            }
          </div>
          <div>
            <input
              type="submit"
              className="button"
              value="Save"
              onClick={this.handleSubmit}
            />
            {
              this.state.editForm ?
                <i
                  className="x-icon icon"
                  onClick={this.props.onCancel}
                ></i>
              :
                null
            }
          </div>
        </label>
      </div>
    );
  }
}

export default CommentForm;