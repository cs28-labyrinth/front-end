import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export default function Login() {
	let history = useHistory();

	return (
		<Formik
			initialValues={{ username: '', password: '' }}
			onSubmit={(values) => {
				axios
					// .post('https://cs28labyrinth.herokuapp.com/api/login/', {
					// 	...values,
					// })
					.post('http://localhost:8000/api/login/', {
						...values,
					})
					.then((res) => {
						localStorage.setItem('token', `Token ${res.data.key}`);
						history.push('/mainpage');
					})
					.catch((err) => console.log(err));
			}}
		>
			<Form>
				<span>Username: </span>
				<Field type="username" name="username"></Field>

				<span>Password: </span>
				<Field type="password" name="password"></Field>

				<button type="submit">Log In</button>
			</Form>
		</Formik>
	);
}
