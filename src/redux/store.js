import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../components/utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
	cards.filter(
		(card) =>
			card.columnId === columnId && strContains(card.title, searchString),
	);

export const getAllColumns = (state) => state.columns;

export const getListById = ({ lists }, listId) =>
	lists.find((list) => list.id === listId);

export const getColumnsByList = (state, listId) => {
	return state.columns.filter((column) => column.listId === listId);
};
export const getAllLists = (state) => state.lists;

// action creators
export const addColumn = (payload) => ({ type: 'ADD_COLUMN', payload });

export const addCard = ({ title, columnId }) => ({
	type: 'ADD_CARD',
	payload: { title, columnId },
});

export const updateSearchString = ({ searchText }) => ({
	type: 'UPDATE_SEARCHSTRING',
	payload: searchText.toLowerCase(),
});

export const addList = (title, description) => {
	return {
		type: 'ADD_LIST',
		payload: {
			title,
			description,
		},
	};
};
export const toggleCardFavorite = (cardId) => {
	return {
		type: 'TOGGLE_CARD_FAVORITE',
		payload: cardId,
	};
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_COLUMN':
			return {
				...state,
				columns: [...state.columns, { id: shortid(), ...action.payload }],
			};

		case 'ADD_CARD':
			const newCard = {
				id: shortid(),
				columnId: action.payload.columnId,
				isFavorite: false,
				title: action.payload.title,
			};
			return {
				...state,
				cards: [...state.cards, newCard],
			};

		case 'UPDATE_SEARCHSTRING':
			return { ...state, searchString: action.payload };

		case 'ADD_LIST':
			const newList = {
				id: shortid(),
				title: action.payload.title,
				description: action.payload.description,
			};
			return {
				...state,
				lists: [...state.lists, newList],
			};
		case 'TOGGLE_CARD_FAVORITE':
			return {
				...state,
				cards: state.cards.map((card) =>
					card.id === action.payload
						? { ...card, isFavorite: !card.isFavorite }
						: card,
				),
			};

		default:
			return state;
	}
};

const store = createStore(
	reducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
