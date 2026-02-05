const initialState = {
	columns: [
		{
			id: 1,
			title: 'Books',
			icon: 'book',
			listId: '1',
		},
		{
			id: 2,
			title: 'Movies',
			icon: 'film',
			listId: '1',
		},
		{
			id: 3,
			title: 'Games',
			icon: 'gamepad',
			listId: '1',
		},
		{
			id: 4,
			title: 'Music',
			icon: 'music',
			listId: '2',
		},
	],

	cards: [
		{ id: 1, columnId: 1, isFavorite: false, title: 'This is Going to Hurt' },
		{ id: 2, columnId: 1, isFavorite: false, title: 'Interpreter of Maladies' },
		{ id: 3, columnId: 2, isFavorite: false, title: 'Harry Potter' },
		{ id: 4, columnId: 2, isFavorite: false, title: 'Star Wars' },
		{ id: 5, columnId: 3, isFavorite: false, title: 'The Witcher' },
		{ id: 6, columnId: 3, isFavorite: false, title: 'Skyrim' },
	],

	lists: [
		{
			id: '1',
			title: 'Things to do...',
			description: 'Interesting things I want to check out',
		},
		{
			id: '2',
			title: 'Test list',
			description: 'Lorem Ipsum',
		},
	],

	searchString: '',
};

export default initialState;
