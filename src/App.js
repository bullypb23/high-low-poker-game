/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import {
	Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container } from './App.styles';
import Global from './Global';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';
import { deckArray } from './utilities/cardsArray';
import * as actions from './store/actions/game';

function App({ shuffleArray }) {
	useEffect(() => {
		const shuffledArray = shuffle(deckArray);
		shuffleArray(shuffledArray);
	}, []);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}
	return (
		<Container>
			<Global />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/game" component={Game} />
				<Redirect to="/" />
			</Switch>
		</Container>
	);
}

App.propTypes = {
	shuffleArray: propTypes.func.isRequired,
};

const mapStateToProps = () => (
	{

	}
);

const mapDispatchToProps = dispatch => (
	{
		shuffleArray: arr => dispatch(actions.handleCardsShuffle(arr)),
	}
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
