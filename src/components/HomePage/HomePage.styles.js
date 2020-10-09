import styled, { keyframes } from 'styled-components';
import image from '../../assets/background1.jpg';

const animate = keyframes`
	from {
		transform: rotateX(90deg);
	}
	to {
		transform: rotateZ(0);
	}
`;

export const Wrapper = styled.div`
  width: 100%;
	background: url(${image});
	background-size: cover;
	padding: 200px 0;
	min-height: 100vh;

	@media (max-width: 576px) {
		padding: 100px 10px;
	}
`;

export const HeadingContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Heading = styled.h1`
	flex: 1 1 100%;
	font-size: 5rem;
	transform-origin: bottom;
	padding: 10px 0;
	text-align: center;
	background: linear-gradient(to right, #125e2a 0%, #135c2a  51%, #71b82e  100%);
	-webkit-background-clip: text;
	-moz-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${animate} 1s ease-in;

	@media (max-width: 576px) {
		font-size: 3rem;
	}
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;

	@media (max-width: 576px) {
		padding: 20px 0;
	}
`;

export const Input = styled.input`
	width: 40%;
	padding: 10px;
	color: #fff;
	border: 1px solid #2c912c;
	background: #161616;
	border-radius: 30px;
	outline: none;
	font-size: 2rem;
	text-align: center;

	@media (max-width: 576px) {
		width: 70%;
		font-size: 1.5rem;
	}
`;

export const Button = styled.button`
	width: 20%;
	padding: 10px 15px;
	font-size: 1.2rem;
	color: #fff;
	background-image: linear-gradient(to right, #3CA55C 0%, #B5AC49  51%, #3CA55C  100%);
	transition: 0.5s;
	background-size: 200% auto;
	color: white;            
	box-shadow: 0 0 10px #eee;
	border-radius: 20px;
	margin: 20px 0;
	border: none;
	outline: none;
	cursor: pointer;

	&:hover {
		background-position: right center;
	}

	@media (max-width: 576px) {
		width: 50%;
		font-size: 1rem;
	}
`;

export const Container = styled.div`
	width: 100%;
`;
