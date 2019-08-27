import React from 'react';

class Header extends React.Component {
	state = {
		title: this.props.title,
	}

	onTitleChange = (evt) => {
		this.setState({
			title: evt.target.value
		});
	}

	onBlur = () => {
		this.props.onUpdateCard({
			title: this.state.title
		});
	}

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title
    });
  }

	render() {
		return (
		  <header>
		    <i className="card-icon icon .close-modal"></i>

		    <textarea
		    	value={this.state.title}
		    	className="list-title"
		    	style={{height: '45px'}}
		    	onChange={this.onTitleChange}
		    	onBlur={this.onBlur}
		    />

		    <p>in list <a className="link">{this.props.listName}</a><i className="sub-icon sm-icon"></i>
		    </p>
		  </header>
		);
	}
}

export default Header;
