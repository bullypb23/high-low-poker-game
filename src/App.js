/* eslint-disable no-use-before-define */
import React from 'react';
import {
	Switch, Route, Redirect, withRouter,
} from 'react-router-dom';
import { Container } from './App.styles';
import Global from './Global';
import HomePage from './components/HomePage/HomePage';
import Game from './components/Game/Game';

function App() {
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

export default withRouter(App);
