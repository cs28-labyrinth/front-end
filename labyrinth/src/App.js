import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/signup" component={SignupRoute} />
				</Switch>
			</header>
		</div>
	);
}

export default App;
