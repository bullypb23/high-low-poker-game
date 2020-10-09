import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
	/* max-width: 100vw; */
	min-height: 100vh;
	background-color: #161616;
`;

export const Container = styled.div`
  width: 100%;
  background-color: #2c912c;
	position: relative;
	overflow: hidden;
`;

export const Heading = styled.h3`
	font-size: 2rem;
	color: #161616;
	padding: 10px 0;
	text-align: center;
	${props => props.green && 'color: #2c912c'};
	${props => props.left && 'text-align: left; padding-left: 20px;'};

	@media (max-width: 576px) {
		font-size: 1.5rem;
	}
`;

export const SectionContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;

	@media (max-width: 576px) {
		padding: 10px 0;
	}
`;

export const Button = styled.button`
	width: auto;
	padding: 10px 30px;
	font-size: 1.2rem;
	color: #fff;
	background-image: linear-gradient(to right, #3CA55C 0%, #B5AC49  51%, #3CA55C  100%);
	transition: 0.5s;
	background-size: 200% auto;
	color: white;            
	border-radius: 20px;
	margin: 0 20px;
	border: none;
	outline: none;
	cursor: pointer;

	&:hover {
		background-position: right center;
	}

	&:disabled {
		background-image: linear-gradient(to right, #757F9A 0%, #D7DDE8  51%, #757F9A  100%);
	}

	@media (max-width: 576px) {
		margin: 0 10px;
		padding: 10px 20px;
		font-size: 1rem;
	}
`;

export const Section = styled.div`
	width: 100%;
	padding: 20px 10px;

	@media (max-width: 576px) {
		padding: 10px;
	}
`;

export const Input = styled.input`
	width: 10%;
	padding: 10px;
	color: #000;
	background-color: transparent;
	border: none;
	text-align: center;
	border: 1px solid #2c912c;
	border-radius: 30px;
	margin-left: 20px;
	outline: none;
	font-size: 1.5rem;
	color: #fff;

	@media (max-width: 576px) {
		width: 40%;
	}
`;

export const IconContainer = styled.div`
	width: 50px;
	height: 50px;
	position: absolute;
	bottom: 10px;
	left: calc(50% - 25px);
	border-radius: 50%;
	background-color: #161616;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	padding: 15px;

	> svg {
		${props => props.color && 'color: #2c912c'}
		${props => !props.color && 'color: red'}
	}

	@media (max-width: 576px) {
		width: 40px;
		height: 40px;
		left: calc(90% - 20px);
	}
`;

export const HeadingContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;
