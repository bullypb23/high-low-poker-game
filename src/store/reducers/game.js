import * as actionTypes from '../actions/actionTypes';
import { deckArray } from '../../utilities/cardsArray';

const DEFAULT_COINS = 100;
const INITIAL_BET = 10;

const initialState = {
	name: '',
	cards: deckArray,
	cardOnTable: {},
	playedCards: [],
	coins: DEFAULT_COINS,
	bet: INITIAL_BET,
	lastRound: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
	case actionTypes.HANDLE_NAME_CHANGE:
		return {
			...state,
			name: action.name,
		};
	case actionTypes.HANDLE_CARDS_SHUFFLE:
		return {
			...state,
			cards: action.array,
			cardOnTable: action.card,
			playedCards: action.playedCards,
			coins: action.coins,
		};
	case actionTypes.HANDLE_BET_VALUE:
		return {
			...state,
			bet: +action.value,
		};
	case actionTypes.HANDLE_RIGHT_GUESS:
		return {
			...state,
			coins: action.value,
			playedCards: [
				...state.playedCards,
				action.card,
			],
			cardOnTable: action.nextCard,
			lastRound: true,
		};
	case actionTypes.HANDLE_WRONG_GUESS:
		return {
			...state,
			coins: action.value,
			playedCards: [
				...state.playedCards,
				action.card,
			],
			cardOnTable: action.nextCard,
			lastRound: false,
		};
	case actionTypes.HANDLE_TIE:
		return {
			...state,
			cardOnTable: action.nextCard,
			playedCards: [
				...state.playedCards,
				action.card,
			],
		};
	case actionTypes.HANDLE_RESET_GAME:
		return {
			...state,
			cards: action.array,
			coins: action.coins,
			cardOnTable: action.card,
			playedCards: [],
			bet: INITIAL_BET,
		};
	default: return state;
	}
};

export default reducer;
