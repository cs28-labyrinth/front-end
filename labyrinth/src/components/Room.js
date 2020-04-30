import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
	background-image: linear-gradient(to bottom right, lightblue, darkblue);
	color: white;

	p {
		color: black;
	}
	width: 300px;
	height: 150px;
	border: ridge 5px dodgerblue;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
`;

const Room = (props) => {
	return (
		<Card>
			<h3>Room Title: {props.getTitle}</h3>
			<div>Room Description: {props.getDescription}</div>
		</Card>
	);
};

export default Room;
