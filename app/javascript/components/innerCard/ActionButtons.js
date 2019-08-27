import React from 'react';

const ActionButtons = (props) => {
	const archiveButtons = (isArchived) => {
		if (isArchived) {
			return (
				<React.Fragment>
					<li
						className="unarchive-button"
						onClick={() => props.onUpdateCard({archived: false})}
					><i className="send-icon sm-icon"></i>Send to board</li>
					<li
						className="red-button"
						onClick={props.onDeleteCard}
					><i className="minus-icon sm-icon"></i>Delete</li>
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
	    <hr />
			{ archiveButtons(props.card.archived) }
	  </ul>
	)
}

export default ActionButtons;
