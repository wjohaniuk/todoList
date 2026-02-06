import shortid from 'shortid';
import strContains from '../components/utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchString }, columnId) =>
	cards.filter(
		(card) =>
			card.columnId === columnId && strContains(card.title, searchString),
	);

// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const ADD_CARD = createActionName('ADD_COLUMN');
const TOGGLE_CARD_FAVORITE = createActionName('TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('REMOVE_CARD');

// action creators
export const addCard = ({ title, columnId }) => ({
	type: ADD_CARD,
	payload: { title, columnId },
});
export const toggleCardFavorite = (cardId) => {
	return {
		type: TOGGLE_CARD_FAVORITE,
		payload: cardId,
	};
};
export const removeCard = (cardId) => ({
	type: REMOVE_CARD,
	payload: cardId,
});

const cardsReducer = (statePart = [], action) => {
	switch (action.type) {
		case ADD_CARD:
			return [...statePart, { ...action.payload, id: shortid() }];
		case TOGGLE_CARD_FAVORITE:
			return statePart.map((card) =>
				card.id === action.payload
					? { ...card, isFavorite: !card.isFavorite }
					: card,
			);
		case REMOVE_CARD:
			return statePart.filter((card) => card.id !== action.payload);
		default:
			return statePart;
	}
};

export default cardsReducer;
