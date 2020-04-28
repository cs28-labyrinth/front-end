import React from 'react';
import { Formik, Form, Field } from 'formik';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register(props) {
	const RegisterSchema = Yup.object().shape({
		username: Yup.string()
			.min(5, 'Must be between 5 and 15 characters.')
			.max(15, 'Must be between 5 and 15 characters.')
			.required('Required Field'),
		password: Yup.string()
			.min(5, 'Must be between 5 and 15 characters.')
			.max(15, 'Must be between 5 and 15 characters.')
			.required('Required Field'),
	});
	console.log(props);
	let history = useHistory();

	return (
		<Form>
			<Formik
				initialValues={{ username: '', password: '' }}
				validationSchema={RegisterSchema}
				onSubmit={(values) => {
					axiosWithAuth()
						.post('https://-----', {
							...values,
							id: Date.now,
						})
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

						<span>Password: </span>
						<Field type="password" name="password"></Field>

						<button type="submit">Register</button>
					</Form>
				)}
			</Formik>
		</Form>
	);
}
