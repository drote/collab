export const getActionText = (attrs) => {
	const change = Object.keys(attrs)[0];

	switch (change) {
		case 'archived':
			let verb = attrs.archived ? 'archived' : 'unarchived';
			return `has ${verb} this card.`;
		case 'due_date':
			return 'has changed the due date.';
		case 'description':
			return 'has changed the description';
	}
}