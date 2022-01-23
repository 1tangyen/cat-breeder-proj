import React from 'react';
import SocialBtn from './SocialBtn';
import { GiHollowCat } from 'react-icons/gi';
import TICAcertificate from '../img/TICAcertificate.webp';
import TICAcode from '../img/TICAcode.webp';
import cfa from '../img/cfa.webp';

export const Button = () => {
	return (
		<div className="button_section">
			<div>
				<SocialBtn />
			</div>
			<div className="link_container">
				<p className="link_heading">Red2 Ragdoll Certificates</p>
				<div className="card">
					<div class="card_area">
						<div class="single_card">
							<img src={TICAcertificate} alt="" className="certificate_img_1" />
							<div class="card_info">
								<p>TICA certificate</p>
							</div>
						</div>
					</div>
					<div class="card_area">
						<div class="single_card">
							<img src={TICAcode} alt="" className="certificate_img" />
							<div class="card_info">
								<p>TICA code</p>
							</div>
						</div>
					</div>
					<div class="card_area">
						<div class="single_card">
							<img src={cfa} alt="" className="certificate_img_1" />
							<div class="card_info">
								<p>CFA certificate</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Button;
