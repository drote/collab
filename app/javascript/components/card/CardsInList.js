import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const CardsInList = ({ cards, listId }) => {
	const descriptionIcon = (card) => card.description ? <i className="description-icon sm-icon"></i> : null;
	const dueDate = (card) => {
		const dateClass = getDateClass(card);
		return card.due_date ? <i className={"clock-icon sm-icon" + dateClass}>{moment(card.due_date).format('MMM D')}</i> : null;
	};
	const actions = (card) => card.comment_count > 0 ? <i className="comment-icon sm-icon"></i> : null;
	const labels = (card) => {
		return card.labels.map((l, i) => {
			return <div key={i} className={`card-label ${l} colorblindable`}></div>
		});
	}

	const getDateClass = (card) => {
		if (card.completed) {
			return ' completed';
		} else if (moment(card.due_date).isBetween(moment(), moment().subtract(2, 'days'))) {
			return ' due-soon';
		} else if (moment().isAfter(card.due_date)) {
			return ' overdue';
		} else {
			return '';
		}
	};

	return (
		<div id="cards-container" data-id={`list-${listId}-cards`}>
			{
				cards.map(c => (
					<Link key={c.id} to={`/cards/${c.id}`}>
						<div
							className="card-background"
							key={c.id}
						>
				        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
		            <div className="card-info">
		            		{ labels(c) }
		                <p>{c.title}</p>
		            </div>
				            <div className="card-icons">
				            	{ dueDate(c) }
				            	{ descriptionIcon(c) }
				            	{ actions(c) }
				            </div>
				        </div>
				    </div>
					</Link>
				))
			}
		</div>
	)
}

export default CardsInList;
