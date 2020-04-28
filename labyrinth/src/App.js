import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup" component={Register} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
