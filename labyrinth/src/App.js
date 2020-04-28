import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register" component={Register} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
