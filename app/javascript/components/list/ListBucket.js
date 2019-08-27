import React from 'react';
import ExistingListsContainer from './ExistingListsContainer';
import ToggleableNewListForm from './ToggleableNewListForm';

const ListBucket = (props) => {
  return (
    <div id="list-container" className="list-container">
        <ExistingListsContainer boardId={props.boardId} />
        <ToggleableNewListForm addList={props.addList}/>
    </div>
  );
};

export default ListBucket;
