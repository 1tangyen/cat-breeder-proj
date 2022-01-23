import React from 'react';

const Information = ({ parents }) => {
	return (
		<section className="display_section">
			<div className="content_section">
				{parents.map((parent) => {
					const { id, title, image, Name, Genetest, Pedigree } = parent;
					return (
						<article key={id} className="display_img ">
							<img src={image} alt={Name} className="display_img" />
							<div>
								<p className="card_info">{Name}</p>
								<a href={Genetest} className="link_p">
									Genetest
								</a>
								<a href={Pedigree} className="link_p">
									Pedigree
								</a>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Information;
