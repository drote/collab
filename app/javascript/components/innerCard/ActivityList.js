import React from 'react';
import moment from 'moment';
import Comment from './Comment';

const renderActivities = (activities, onDelete, onSubmit) => {
  return activities.map(a => {
    return a.text ? (
      <Comment
        key={a.id}
        onSubmit={onSubmit}
        {...a}
      />
    ) : (
      <li key={a.id}>
        <div className="member-container">
          <div className="card-member small-size">UN</div>
        </div>
        <p>
          <span className="member-name">USERNAME </span>
          {a.description}
          <small>{moment(a.created_at).calendar()}</small>
        </p>
      </li>
    )
  });
}

const ActivityList = ({ activities, onDelete, onSubmit }) => {
  return (
    <li className="activity-section">
      <h2 className="activity-icon icon">Activity</h2>
      <ul className="horiz-list">
        <li className="not-implemented">Show Details</li>
      </ul>
      <ul className="modal-activity-list">
        {renderActivities(activities, onDelete, onSubmit)}
      </ul>
    </li>
  );
}

export default ActivityList;