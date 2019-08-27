import React from 'react';

const colors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];

class LabelsPopover extends React.Component {
	state = {
		search: '',
		labels: {},
	}

	componentDidMount() {
		const labels = {};
		this.props.labels.forEach(l => labels[l] = true);
		this.setState({labels: {...labels}});
	}

	componentWillReceiveProps(nextProps) {
		const labels = {};
		nextProps.labels.forEach(l => labels[l] = true);
		this.setState({labels: {...labels}});
	}

	handleLabelClick = (label) => {
		const newLabels = { ...this.state.labels };

		if (newLabels[label]) {
			delete newLabels[label];
		} else {
			newLabels[label] = true;
		}

		this.props.onHandleLabelClick({labels: Object.keys(newLabels)});
		this.setState({labels: newLabels});
	} 

	render() {
		return (
			<div className="popover labels">
			  <div id="add-options-labels-dropdown">
			    <header>
			      <span>Labels</span>
			      <a
			      	href="#"
			      	className="icon-sm icon-close"
			      	onClick={this.props.closePopover}
			      ></a>
			    </header>
			    <div className="content">
			      <input className="dropdown-input" placeholder="Search labels..." type="text" />
			      <div className="labels-search-results">
			        <ul className="label-list">
			        	{ colors.map((c, idx) => {
			        		if (this.state.search && !c.startsWith(this.state.search)) return null;

			        		return (
			        			<li
			        				key={idx}
			        				onClick={() => this.handleLabelClick(c)}
			        			>
			        				<div className={`label-background ${c}`}>
			        				{ this.state.labels[c] ?
			        					<i className="check-icon sm-icon"></i>
			        					:
			        					null}
			        				</div>
			        			</li>
			        		)
			        	})}
			        </ul>
			        <ul className="light-list">
			          <li className="not-implemented">Create a new label</li>
			          <hr />
			          <li className="toggleColorblind">Enable color blind friendly mode.</li>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
}

export default LabelsPopover;