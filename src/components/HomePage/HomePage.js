import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
	Wrapper, HeadingContainer, Heading, Input, Button,
} from './HomePage.styles';
import * as actions from '../../store/actions/game';

const HomePage = ({ handleNameChange, history, handleGameStart }) => {
	const goToGamePage = () => {
		handleGameStart();
		history.push('/game');
	};

	return (
		<Wrapper>
			<HeadingContainer>
				<Heading>Welcome to High Low Game</Heading>
			</HeadingContainer>
			<Input onChange={e => handleNameChange(e.target.value)} />
			<Button onClick={goToGamePage}>Play</Button>
		</Wrapper>
	);
};

HomePage.propTypes = {
	handleNameChange: propTypes.func.isRequired,
	handleGameStart: propTypes.func.isRequired,
	history: propTypes.object.isRequired,
};

const mapStateToProps = state => (
	{
		name: state.game.name,
	}
);

const mapDispatchToProps = dispatch => (
	{
		handleNameChange: name => dispatch(actions.handleNameChange(name)),
		handleGameStart: () => dispatch(actions.handleGameStart()),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
