import React, { Component } from 'react';
import { IoPawOutline } from 'react-icons/io5';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
	state = {
		isOpen: false
	};
	handleToggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<nav className="navbar">
				<div className="nav-center">
					<div className="nav-header">
						<Link to="/">
							<img src={logo} alt="Cats Home" className="nav_logo" />
						</Link>
						<button type="button" className="nav-btn" onClick={this.handleToggle}>
							<IoPawOutline className="nav-icon" />
						</button>
					</div>
					<ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/AboutUS">About</Link>
						</li>
						<li>
							<Link to="/Kittens">Kittens</Link>
						</li>
						<li>
							<Link to="/KittyParents">Breeders</Link>
						</li>
						<li>
							<Link to="/Contact">Contact</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}
