import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
	Wrapper, HeadingContainer, Heading, Input, Button, Container, Form,
} from './HomePage.styles';
import * as actions from '../../store/actions/game';

const HomePage = ({ handleNameChange, history, name }) => {
	const goToGamePage = (e) => {
		e.preventDefault();
		history.push('/game');
	};

	return (
		<Wrapper>
			<HeadingContainer>
				<Heading>High Low Poker Game</Heading>
			</HeadingContainer>
			<Container>
				<Form onSubmit={goToGamePage}>
					<Input onChange={e => handleNameChange(e.target.value)} value={name || localStorage.getItem('name')} placeholder="Enter Your Name" />
					<Button type="submit">Play</Button>
				</Form>
			</Container>
		</Wrapper>
	);
};

HomePage.propTypes = {
	handleNameChange: propTypes.func.isRequired,
	history: propTypes.object.isRequired,
	name: propTypes.string.isRequired,
};

const mapStateToProps = state => (
	{
		name: state.game.name,
	}
);

const mapDispatchToProps = dispatch => (
	{
		handleNameChange: name => dispatch(actions.handleNameChange(name)),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
