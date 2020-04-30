import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import MainPage from './components/MainPage';
import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import MapPage from './components/MapPage';

function App() {
	return (
		<div className="App">
			<h1>The Labyrinth</h1>
			<Navigation />
			<header className="App-header">
				<Switch>
					<Route exact path="/login" component={Login} />
					<Route exact path="/register" component={Register} />

					<PrivateRoute exact path="/mainpage" component={MainPage} />
					<PrivateRoute exact path="/mappage" component={MapPage} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
