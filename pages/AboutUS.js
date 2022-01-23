import React from 'react';
import SocialBtn from '../components/SocialBtn';
import house1 from '../img/house/house1.webp';
import house2 from '../img/house/house2.webp';
import house3 from '../img/house/house3.webp';
import house4 from '../img/house/house4.webp';

export const AboutUS = () => {
	return (
		<main className="aboutus_section">
			<span className="aboutus_heading"> About us </span>

			<div className="feature-grid">
				<div className="img_grid">
					<div className="img_hover">
						<div>
							<img src={house1} alt="houseimg" className="img_hover" />
						</div>
						<div className="sans-serif-body">
							We're located at Saint Louis, Missouri. This is our house & living room. We love watching tv
							and spending chill time with our cats here.
						</div>
					</div>
				</div>
				<div className="img_grid">
					<div className="img_hover">
						<div>
							<img src={house2} alt="houseimg" className="img_hover" />
						</div>
						<div className="sans-serif-body">
							Going forward left is our dinning place. There is also a isolation cottage which can provide
							an independent space for our kittens who need isolation during their special times.
						</div>
					</div>
				</div>
				<div className="img_grid">
					<div className="img_hover">
						<div>
							<img src={house3} alt="houseimg" className="img_hover" />
						</div>
						<div className="sans-serif-body">
							This is our lower floor, it can directly go to our back yard and this is also my cats
							amusement park. The clear fence is for kittens after weaning. They will have a plcae learn
							and live before they integration into family.
						</div>
					</div>
				</div>
				<div className="img_grid">
					<div className="img_hover">
						<div>
							<img src={house4} alt="houseimg" className="img_hover" />
						</div>
						<div className="sans-serif-body">
							On the uppder level we have prepared a nursing room for pregnanet cat. They will have their
							own privacy room with 24hr real time monitoring with the best secure.
						</div>
					</div>
				</div>
			</div>
			<div>
				<SocialBtn />
			</div>
		</main>
	);
};

export default AboutUS;
