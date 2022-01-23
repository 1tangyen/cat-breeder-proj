import React from 'react';
import Home from './pages/Home';
import AboutUS from './pages/AboutUS';
import Kittens from './pages/Kittens';
import KittyParents from './pages/KittyParents';
import Contact from './pages/Contact';
import Error from './pages/Error';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/AboutUS" element={<AboutUS />} />
					<Route path="/Kittens" element={<Kittens />} />
					<Route path="/KittyParents" element={<KittyParents />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
