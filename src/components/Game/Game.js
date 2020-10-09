/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';
import useImage from 'use-image';
import {
	Layer, Image,
} from 'react-konva';
import { Stage } from 'react-konva-portal';
import { FaCheck, FaTimes } from 'react-icons/fa';
import {
	Wrapper, Container, Heading, SectionContainer, Button, Input, Section, IconContainer, HeadingContainer,
} from './Game.styles';
import * as actions from '../../store/actions/game';
import imgSrc from '../../assets/card.jpg';
import Card from '../Card/Card';

const Game = ({
	name, cards, shuffleArray, cardOnTable, coins, handleTie, handleResetGame,
	handleBetValue, bet, handleRightGuess, handleWrongGuess, playedCards, lastRound,
}) => {
	const [valid, setValid] = useState(true);
	const [width, setWidth] = useState(null);
	const [playerName, setPlayerName] = useState('');

	function handleResize() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		// eslint-disable-next-line no-use-before-define
		const shuffledArray = shuffle(cards);
		shuffleArray(shuffledArray);
		setWidth(window.innerWidth);
		// eslint-disable-next-line prefer-arrow-callback
		window.addEventListener('resize', handleResize);
		setPlayerName(name || localStorage.getItem('name'));

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function shuffle(array) {
		for (let i = array.length - 1; i > 0; i -= 1) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

	const [img] = useImage(imgSrc);

	const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

	const handlePlay = async (isGreater = false) => {
		const nextCard = cards.pop();

		if ((isGreater && nextCard.value > cardOnTable.value) || (!isGreater && nextCard.value < cardOnTable.value)) {
			const value = coins + bet;
			handleRightGuess(value, cardOnTable, nextCard, isGreater);
		} else if ((isGreater && nextCard.value < cardOnTable.value) || (!isGreater && nextCard.value > cardOnTable.value)) {
			const shuffled = shuffle([...cards, ...playedCards, cardOnTable, nextCard]);
			const value = coins - bet;
			handleWrongGuess(value, cardOnTable, nextCard);
			setValid(false);
			await delay(2000);
			handleResetGame(shuffled, value);
			setValid(true);
		} else {
			handleTie(cardOnTable, nextCard);
		}
	};

	const handleBet = (e) => {
		const reg = /^\d+$/;
		if (!reg.test(e.target.value) || +e.target.value > coins || +e.target.value < 10) {
			setValid(false);
		} else {
			setValid(true);
		}
		handleBetValue(e.target.value);
	};

	const handleGameReset = (coinsValue) => {
		const arr = [...cards, ...playedCards, cardOnTable];
		const shuffledArr = shuffle(arr);
		handleResetGame(shuffledArr, coinsValue);
	};

	let elementWidth;
	let height;
	if (width < 576) {
		elementWidth = width / 4;
		height = elementWidth * 4;
	} else if (width > 576 && width < 768) {
		elementWidth = width / 5;
		height = elementWidth * 2;
	} else {
		elementWidth = 150;
		height = 300;
	}

	return (
		<Wrapper>
			<Container>
				<Stage width={+width} height={height}>
					<Layer>
						{cards.map((item, index) => (
							<Image
								key={index}
								image={img}
								x={20}
								y={20}
								width={+elementWidth}
								height={+elementWidth * 1.67}
							/>
						))}
					</Layer>
					<Card card={cardOnTable} X={+elementWidth + 50} Y={20} width={+elementWidth} height={+elementWidth * 1.67} />
					{playedCards.length !== 0 && playedCards.map((item, index) => (
						<Card
							key={index}
							card={item}
							X={width > 576 ? +elementWidth * 2 + 50 + (+index + 1) * 20 : (+index + 1) * 20}
							Y={width > 576 ? 20 : +elementWidth * 1.67 + 40}
							width={+elementWidth}
							height={+elementWidth * 1.67}
							text={item.success ? 'H' : 'L'}
						/>
					))}
				</Stage>
				<Heading left>
					Player:
					{' '}
					{playerName}
				</Heading>
				{lastRound !== null && lastRound ? (
					// eslint-disable-next-line react/jsx-boolean-value
					<IconContainer color={lastRound ? 1 : 0}>
						<FaCheck />
					</IconContainer>
				) : (
					<IconContainer>
						<FaTimes />
					</IconContainer>
				)}
			</Container>
			<Section>
				<HeadingContainer>
					<Heading green>Bet: </Heading>
					<Input onChange={handleBet} value={bet} />
				</HeadingContainer>
				<SectionContainer>
					<Button onClick={() => handlePlay()} disabled={!valid || coins === 0}>Lower</Button>
					<Button onClick={() => handlePlay(true)} disabled={!valid || coins === 0}>Higher</Button>
				</SectionContainer>
				<SectionContainer>
					<Button onClick={() => handleGameReset(100)}>Reset</Button>
					<Button onClick={() => handleGameReset(coins)}>New Game</Button>
				</SectionContainer>
				<Heading green>
					Coins:
					{' '}
					{coins}
				</Heading>
			</Section>
		</Wrapper>
	);
};

Game.propTypes = {
	name: propTypes.string.isRequired,
	cards: propTypes.array.isRequired,
	playedCards: propTypes.array.isRequired,
	cardOnTable: propTypes.object.isRequired,
	handleBetValue: propTypes.func.isRequired,
	handleRightGuess: propTypes.func.isRequired,
	handleWrongGuess: propTypes.func.isRequired,
	handleResetGame: propTypes.func.isRequired,
	coins: propTypes.number.isRequired,
	bet: propTypes.number.isRequired,
	shuffleArray: propTypes.func.isRequired,
	handleTie: propTypes.func.isRequired,
	lastRound: propTypes.bool.isRequired,
};

const mapStateToProps = state => (
	{
		name: state.game.name,
		cards: state.game.cards,
		cardOnTable: state.game.cardOnTable,
		coins: state.game.coins,
		bet: state.game.bet,
		playedCards: state.game.playedCards,
		lastRound: state.game.lastRound,
	}
);

const mapDispatchToProps = dispatch => (
	{
		shuffleArray: arr => dispatch(actions.handleCardsShuffle(arr)),
		handleBetValue: value => dispatch(actions.handleBetValue(value)),
		handleRightGuess: (value, card, nextCard, isGreater) => dispatch(actions.handleRightGuess(value, card, nextCard, isGreater)),
		handleWrongGuess: (value, cardOnTable, nextCard) => dispatch(actions.handleWrongGuess(value, cardOnTable, nextCard)),
		handleTie: (card, nextCard) => dispatch(actions.handleTie(card, nextCard)),
		handleResetGame: (arr, coins) => dispatch(actions.handleResetGame(arr, coins)),
	}
);

export default connect(mapStateToProps, mapDispatchToProps)(Game);
