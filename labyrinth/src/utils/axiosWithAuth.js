import axios from 'axios';

export const axiosWithAuth = () => {
	const token = localStorage.getItem('token');
	return axios.create({
		baseURL: 'https://cs28labyrinth.herokuapp.com/',
		headers: {
			Authorization: token,
		},
	});
};
