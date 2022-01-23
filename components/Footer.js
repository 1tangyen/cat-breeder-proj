import React from 'react';
import { SiInstagram, SiFacebook, SiSinaweibo } from 'react-icons/si';
import logo from '../img/logo.svg';

export const Footer = () => {
	return (
		<div className="section footer_section">
			<div className="social_pair">
				<div className="social_block">
					<img src={logo} alt="Cats Home" className="footer_logo" />

					<div className="box_size">
						<h2 className="footer_text">company info</h2>
						<h6>http://www.red2breeder.com</h6>
						<h6>Email:r.e.ragdoll@gmail.com</h6>
					</div>
				</div>
				<div className="social_block social_wrapper">
					<a href="https://www.instagram.com/redecho_ragdoll/" className="social_link">
						<SiInstagram />
					</a>
					<a href="https://www.facebook.com/RedEchoRag/" className="social_link">
						<SiFacebook />
					</a>
					<a href="https://weibo.com/redechoragdoll?tabtype=home" className="social_link">
						<SiSinaweibo />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
