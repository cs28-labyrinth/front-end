import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { moveNorth, moveEast, moveSouth, moveWest } from './MovementCalls';


const Card = styled.div`
	background-image: linear-gradient(to bottom right, lightblue, darkblue);
	color: white;
	width: 400px;
	height: 200px;
	border: ridge 5px dodgerblue;
	align-items: center;
	justify-content: space-between;
	margin: 20px;
`;

export default function MovementBar() {
	let history = useHistory();

	// useEffect(() => {
	// 	axios
	// 		.post('https://cs28labyrinth.herokuapp.com/api/adv/move/', {
	// 			direction: 'n'
	// },
	// 		})
	// 		.then((res) => {
	// 			console.log(res);
	// 		});
	// });

	// move north
	//  moveNorth = event => {
	// 	event.preventDefault()
	// 	axios.post('https://cs28labyrinth.herokuapp.com/api/adv/move/n_to', {
	// 		...values,
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});
	// }

	// moveEast = event => {
	// 	event.preventDefault()
	// 	axios.post('https://cs28labyrinth.herokuapp.com/api/adv/move/', {
	// 		...values,
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});
	// }

	// moveSouth = event => {
	// 	event.preventDefault()
	// 	axios.post('https://cs28labyrinth.herokuapp.com/api/adv/move/', {
	// 		...values,
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});
	// }

	// moveWest = event => {
	// 	event.preventDefault()
	// 	axios.post('https://cs28labyrinth.herokuapp.com/api/adv/move/', {
	// 		...values,
	// 	})
	// 	.then((res) => {
	// 		console.log(res);
	// 	});
	// }

	return (
		<Card>
			<h3>Choose which direction to move:</h3>
			<button onClick={moveNorth}>N</button>
			<button onClick={moveEast}>E</button>
			<button onClick={moveSouth}>S</button>
			<button onClick={moveWest}>W</button>
		</Card>
	);
}