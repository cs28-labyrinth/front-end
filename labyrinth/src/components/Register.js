import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register(props) {
	const RegisterSchema = Yup.object().shape({
		username: Yup.string()
			.min(5, 'Must be between 5 and 15 characters.')
			.max(15, 'Must be between 5 and 15 characters.')
			.required('Required Field'),
		password1: Yup.string()
			.min(5, 'Must be between 5 and 15 characters.')
			.max(15, 'Must be between 5 and 15 characters.')
			.required('Required Field'),
		password2: Yup.string()
			.min(5, 'Must be between 5 and 15 characters.')
			.max(15, 'Must be between 5 and 15 characters.')
			.required('Required Field'),
	});
	console.log(props);
	let history = useHistory();

	return (
		<Formik
			initialValues={{ username: '', password1: '', password2: '' }}
			validationSchema={RegisterSchema}
			onSubmit={(values) => {
				axios
					.post('https://cs28labyrinth.herokuapp.com/api/registration/', {
						...values,
						id: Date.now,
					})
					// .post('http://localhost:8000/api/registration/', {
					// 	...values,
					// 	id: Date.now,
					// })
					.then((res) => {
						console.log(res);
						history.push('/login');
					})
					.catch((err) => console.log(err));
			}}
		>
			{(errors, touched) => (
				<Form>
					<span>Username: </span>
					<Field type="username" name="username"></Field>

					{errors.username && touched.username ? (
						<div>{errors.username}</div>
					) : null}

					<span>Password1: </span>
					<Field type="password" name="password1"></Field>

					<span>Password2: </span>
					<Field type="password" name="password2"></Field>

					<button type="submit">Register</button>
				</Form>
			)}
		</Formik>
	);
}
