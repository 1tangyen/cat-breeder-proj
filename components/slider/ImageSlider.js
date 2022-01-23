import React, { useState, useEffect } from 'react';
import SliderData from './SliderData';

function ImageSlider() {
	const [ cats, setCats ] = useState(SliderData);
	const [ index, setIndex ] = useState(0);

	useEffect(
		() => {
			const lastIndex = cats.length - 1;
			if (index < 0) {
				setIndex(lastIndex);
			}
			if (index > lastIndex) {
				setIndex(0);
			}
		},
		[ index, cats ]
	);

	useEffect(
		() => {
			let slider = setInterval(() => {
				setIndex(index + 1);
			}, 3000);
			return () => {
				clearInterval(slider);
			};
		},
		[ index ]
	);
	return (
		<main className="hero_section">
			<div className="hero_center">
				{cats.map((cat, catIndex) => {
					const { id, name, image } = cat;

					let position = 'nextSlide';
					if (catIndex === index) {
						position = 'activeSlide';
					}
					if (catIndex === index - 1 || (index === 0 && catIndex === cats.length - 1)) {
						position = 'lastSlide';
					}
					return (
						<article className={position} key={id}>
							<img src={image} alt={name} />
						</article>
					);
				})}
			</div>
		</main>
	);
}

export default ImageSlider;
