import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SocialBtn from '../components/SocialBtn';
import SliderData from '../components/slider/SliderData';

function Kittens() {
	const [ cats, setCats ] = useState(SliderData);
	const [ searchTerm, setSearchTerm ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<main className="kitten_section">
			<section className="search">
				<form className="search-form">
					<input
						type="text"
						placeholder="search...king/queen/kitten"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="form-input"
					/>
					<button type="submit" className="submit-btn" onClick={handleSubmit}>
						<FaSearch />
					</button>
				</form>
			</section>
			<section className="photos">
				<div className="photos-center">
					{cats
						.filter((cat) => {
							if (searchTerm == '') {
								return cat;
							} else if (cat.name.toLowerCase().includes(searchTerm.toLowerCase())) {
								return cat;
							}
						})
						.map((cat) => {
							const { image, id, name } = cat;
							console.log(cat);
							return (
								<article className="photo" key={id}>
									<img src={image} alt={name} />
								</article>
							);
						})}
				</div>
			</section>
			<div>
				<SocialBtn />
			</div>
		</main>
	);
}

export default Kittens;
