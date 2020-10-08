import * as actionTypes from '../actions/actionTypes';

const initialState = {
	name: '',
	cards: [],
	cardOnTable: {},
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.HANDLE_NAME_CHANGE:
		return {
			...state,
			name: action.name,
		};
	case actionTypes.HANDLE_START_GAME:
		return {
			...state,
			cardOnTable: state.cards.pop(),
		};
	case actionTypes.HANDLE_CARDS_SHUFFLE:
		return {
			...state,
			cards: action.array,
		};
	default: return state;
	}
};

export default reducer;
