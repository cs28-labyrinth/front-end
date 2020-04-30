import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Room from './Room';

export default function MainPage() {
	const [room, setRoom] = useState([]);

	useEffect(() => {
		axios
			.get('https://cs28labyrinth.herokuapp.com/api/adv/rooms/')
			.then((res) => {
				console.log(res.data);
				console.log(res.data.rooms);
				const newData = res.data.rooms;
				setRoom(newData);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div>
			{room.map((item) => {
				return <Room getTitle={item.title} getDescription={item.description} />;
			})}
		</div>
	);
}
