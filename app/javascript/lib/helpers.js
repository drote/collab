export const getActionText = (attrs) => {
	const change = Object.keys(attrs)[0];
	let verb;

	switch (change) {
		case 'archived':
			verb = attrs.archived ? 'archived' : 'unarchived';
			return `has ${verb} this card.`;
		case 'due_date':
			verb = attrs.due_date ? 'changed' : 'removed';
			return `has ${verb} the due date.`;
		case 'description':
			return 'has changed the description';
	}
}