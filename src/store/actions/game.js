import * as actionTypes from './actionTypes';

export const handleNameChange = (name) => {
	localStorage.setItem('name', name);
	return {
		type: actionTypes.HANDLE_NAME_CHANGE,
		name,
	};
};

export const handleGameStart = () => (
	{
		type: actionTypes.HANDLE_START_GAME,
	}
);

export const handleCardsShuffle = (array) => {
	const cardsLeft = JSON.parse(localStorage.getItem('cards'));
	let card = JSON.parse(localStorage.getItem('cardOnTable'));
	const playedCards = JSON.parse(localStorage.getItem('playedCards'));
	const coins = JSON.parse(localStorage.getItem('coins'));
	let cardsArr;
	if (cardsLeft.length === 0) {
		card = array.pop();
		localStorage.setItem('cardOnTable', JSON.stringify(card));
		localStorage.setItem('cards', JSON.stringify(array));
		localStorage.setItem('playedCards', JSON.stringify([]));
		cardsArr = array;
	} else {
		cardsArr = cardsLeft;
	}
	return {
		type: actionTypes.HANDLE_CARDS_SHUFFLE,
		array: cardsArr,
		card,
		playedCards,
		coins,
	};
};

export const handleBetValue = value => (
	{
		type: actionTypes.HANDLE_BET_VALUE,
		value,
	}
);

export const handleRightGuess = (value, card, nextCard, isGreater) => {
	const cardOnTable = {
		...card,
		success: isGreater,
	};
	const cards = JSON.parse(localStorage.getItem('cards'));
	const playedCards = JSON.parse(localStorage.getItem('playedCards'));
	playedCards.push(cardOnTable);
	cards.pop();
	localStorage.setItem('cards', JSON.stringify(cards));
	localStorage.setItem('cardOnTable', JSON.stringify(nextCard));
	localStorage.setItem('playedCards', JSON.stringify(playedCards));
	localStorage.setItem('coins', value);
	return {
		type: actionTypes.HANDLE_RIGHT_GUESS,
		card: cardOnTable,
		value,
		nextCard,
		isGreater,
	};
};

export const handleWrongGuess = (value, card, nextCard) => (
	{
		type: actionTypes.HANDLE_WRONG_GUESS,
		value,
		card,
		nextCard,
	}
);

export const handleTie = (card, nextCard) => {
	const array = JSON.parse(localStorage.getItem('playedCards'));
	array.push(card);
	localStorage.setItem('playedCards', JSON.stringify(array));
	localStorage.setItem('cardOnTable', JSON.stringify(nextCard));
	return {
		type: actionTypes.HANDLE_TIE,
		card,
		nextCard,
	};
};

export const handleResetGame = (array, coins) => {
	const card = array.pop();
	localStorage.setItem('cardOnTable', JSON.stringify(card));
	localStorage.setItem('cards', JSON.stringify(array));
	localStorage.setItem('playedCards', JSON.stringify([]));
	localStorage.setItem('coins', coins);
	return {
		type: actionTypes.HANDLE_RESET_GAME,
		array,
		coins,
		card,
	};
};
