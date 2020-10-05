import { createStore, combineReducers } from 'redux';
import game from './reducers/game';

const rootReducer = combineReducers({
	game: game,
});

export const store = createStore(
	rootReducer,
	typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
		? window.__REDUX_DEVTOOLS_EXTENSION__()
		: f => f
);
