import * as actionTypes from './actionTypes';

export const handleNameChange = name => (
	{
		type: actionTypes.HANDLE_NAME_CHANGE,
		name,
	}
);

export const handleGameStart = () => (
	{
		type: actionTypes.HANDLE_START_GAME,
	}
);

export const handleCardsShuffle = array => (
	{
		type: actionTypes.HANDLE_CARDS_SHUFFLE,
		array,
	}
);
