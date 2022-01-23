import React from 'react';
import { SiInstagram, SiFacebook, SiSinaweibo } from 'react-icons/si';

const SocialBtn = () => {
	return (
		<div className="social_container">
			<div className="social_pair">
				<div className="social_block">
					<span className="section_heading">Follow US on Social Media</span>
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

export default SocialBtn;
