import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const HeadingContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Heading = styled.h1`
	flex: 1 1 100%;
	font-size: 4rem;
	color: #2c912c;
	padding: 10px 0;
	text-align: center;
`;

export const Input = styled.input`
	width: 40%;
	padding: 10px;
	color: #000;
	border: 1px solid red;
	border-radius: 5px;
	outline: none;
	font-size: 1.2rem;
`;

export const Button = styled.button`
	width: 20%;
	padding: 10px 15px;
	font-size: 1.2rem;
	color: #fff;
	background-color: #2c912c;
	border-radius: 10px;
	border: none;
	outline: none;
	cursor: pointer;

	&:hover {
		background-color: #1c8c1c;
	}
`;
