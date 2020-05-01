import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.div`
	background-image: linear-gradient(to bottom right, lightblue, white);
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export default function Navigation() {
	return (
		<NavBar>
			<NavLink to="/login">Log In</NavLink>
			<NavLink to="/mainpage">Home</NavLink>
			<NavLink to="/mappage">Play The Game</NavLink>
			<NavLink to="/register">Sign Out</NavLink>
		</NavBar>
	);
}
