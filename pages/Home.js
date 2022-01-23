import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Button from '../components/Button';

const home = () => {
	return (
		<div>
			<Hero />
			<Button />
			<Intro />
			<Footer />
		</div>
	);
};

export default home;
