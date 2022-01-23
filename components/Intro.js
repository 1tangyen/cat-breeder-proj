import React from 'react';
import display5 from '../img/display/display5.jpeg';

export const Intro = () => {
	return (
		<div className=" intro_section">
			<div className="heading">
				<span className="intro-title">Meow Meow Meow</span>

				<div className="intro_columns">
					<div className="display_border">
						<img src={display5} alt="heroimg" className="intro_img" />
					</div>
					<div className="intro_grid">
						<div className="about_info">
							<span className="about_heading">Who we are</span>
							<p className="about_p">
								we are a small and cageless home Ragdoll cattery & hobby Ragdoll breeder. We only breed
								the most lovely cat breed Ragdoll. All of our cats and kittens live with our
								unconditional love.
							</p>
						</div>
						<div className="about_info">
							<span className="about_heading">Our Mission</span>
							<p className="about_p">
								We are dedicated to breeding healthy, well-typed, beautiful, playful kittens with the
								genuine Ragdoll temperament. Our cats and kittens are raised in our house and they are
								our beloved family members who are with us everywhere in the house.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
