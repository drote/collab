import React from 'react';

const LabelsPopover = (props) => {
	const colors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];
	const labels = {};
	
	props.labels.forEach(l => labels[l] = true);
	return (
		<div className="popover labels">
		  <div id="add-options-labels-dropdown">
		    <header>
		      <span>Labels</span>
		      <a href="#" className="icon-sm icon-close"></a>
		    </header>
		    <div className="content">
		      <input className="dropdown-input" placeholder="Search labels..." type="text" />
		      <div className="labels-search-results">
		        <ul className="label-list">
		        	{ colors.map((c, idx) => {
		        		return (
		        			<li
		        				key={idx}
		        				onClick={() => props.onHandleLabelClick({labels: [c]})}
		        			>
		        				<div className={`label-background ${c}`}>
		        				{ labels[c] ?
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

export default LabelsPopover;