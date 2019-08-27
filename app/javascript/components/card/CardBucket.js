import React from 'react';
import CardsInListContainer from './CardsInListContainer';
import ToggleableNewCardForm from './ToggleableNewCardForm';

const CardBucket = ({ listId, onToggleForm, onFormSubmit }) => {
  return (
    <React.Fragment>
      <CardsInListContainer
        listId={listId}
      />
      <ToggleableNewCardForm 
        onToggleForm={onToggleForm}
        onFormSubmit={onFormSubmit}
        listId={listId}
      />
    </React.Fragment>
  );
};

export default CardBucket;
