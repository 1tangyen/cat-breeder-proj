import React, { useState } from 'react';
import parentsdata from '../KittyParents/parentsdata';
import Categories from '../KittyParents/Categories';
import Information from '../KittyParents/Information';
import BreederTable from '../KittyParents/BreederTable';
import SocialBtn from '../components/SocialBtn';

const allTitles = [ 'all', ...new Set(parentsdata.map((parent) => parent.title)) ];

function KittyParents() {
	const [ parent, setParent ] = useState(parentsdata);
	const [ titles, setTitles ] = useState(allTitles);

	const filterParents = (title) => {
		if (title === 'all') {
			setParent(parentsdata);
			return;
		}

		const newParent = parentsdata.filter((parent) => parent.title === title);
		setParent(newParent);
	};

	return (
		<main className="parents_section">
			<div className="table_container">
				<p className="table_heading">Our Breeders Information</p>
			</div>
			<section>
				<Categories titles={titles} filterParents={filterParents} />
				<BreederTable parents={parent} />
			</section>

			<section className="display_section">
				<div>
					<Information parents={parent} />
				</div>
			</section>
			<div>
				<SocialBtn />
			</div>
		</main>
	);
}

export default KittyParents;
