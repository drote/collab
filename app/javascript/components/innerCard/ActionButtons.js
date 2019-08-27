import React from 'react';

const ActionButtons = (props) => {
	const archiveButtons = (isArchived) => {
		if (isArchived) {
			return (
				<React.Fragment>
					<li
						class="unarchive-button"
						onClick={() => props.onUpdateCard({archived: false})}
					><i class="send-icon sm-icon"></i>Send to board</li>
					<li class="red-button"><i class="minus-icon sm-icon"></i>Delete</li>
				</React.Fragment>
			);
		} else {
			return (
	    	<li
					className="archive-button"
					onClick={() => props.onUpdateCard({archived: true})}
				><i className="file-icon sm-icon "></i>Archive</li>
			);
		}
	};

	return (
	  <ul>
	    <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
	    <li className="copy-button"><i className="card-icon sm-icon"></i>Copy</li>
	    <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i></li>
	    <hr />
			{ archiveButtons(props.card.archived)}
	  </ul>
	)
}

export default ActionButtons;
