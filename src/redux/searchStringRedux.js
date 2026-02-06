// actions
const createActionName = (actionName) => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');

// action creators
export const updateSearchString = ({ searchText }) => ({
	type: UPDATE_SEARCHSTRING,
	payload: searchText.toLowerCase(),
});

const searchStringReducer = (statePart = '', action) => {
	switch (action.type) {
		case UPDATE_SEARCHSTRING:
			return action.payload;
		default:
			return statePart;
	}
};

export default searchStringReducer;
