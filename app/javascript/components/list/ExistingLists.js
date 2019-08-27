import React from 'react';
import ListWrapperContainer from './ListWrapperContainer';

const ExistingLists = (props) => {
  const lists = props.lists.map(list => {
    return (
      <ListWrapperContainer
        key={list.id}
        list={list}
      />
    );
  });

  return (
    <div id="existing-lists" className="existing-lists">
      { lists }
    </div>
  );
};

export default ExistingLists;
