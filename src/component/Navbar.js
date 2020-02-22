import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='nav-wrapper red darken-3'>
			<div className='container'>
				<NavLink  to='/' className='brand-logo'>L`o`GO</NavLink>
				<ul className='right'>
					<li><NavLink to='/'>Home</NavLink></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;