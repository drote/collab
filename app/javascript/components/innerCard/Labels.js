import React from 'react';

const getLabels = (labels) => {
	return labels.map((l, i) => {
    return (
      <div key={i} className="member-container">
        <div className={`${l} label colorblindable`}></div>
      </div>
    );
	});
}

const Labels = ({ labels, onToggleEditLabels }) => {
  if (!labels.length) {
    return null;
  }

  return (
    <li className="labels-section">
      <h3>Labels</h3>
      { getLabels(labels) }
      <div className="member-container">
      <i
        className="plus-icon sm-icon"
        onClick={onToggleEditLabels}
      ></i>
      </div>
    </li>
  );
}

export default Labels;