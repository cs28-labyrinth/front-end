import React from 'react';
import { useHistory } from 'react-router-dom';
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
	align-items: center;
	justify-content: space-between;
	margin: 20px;
`;

export default function MovementBar() {
	let history = useHistory();

	return (
		<Card>
			<h3>Choose which direction to move:</h3>
			<button>N</button>
			<button>S</button>
			<button>E</button>
			<button>W</button>
		</Card>
	);
}
