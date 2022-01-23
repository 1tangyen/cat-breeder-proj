import React from 'react';

const Categories = ({ titles, filterParents }) => {
	return (
		<div className="category_container">
			{titles.map((title, index) => {
				return (
					<button key={index} className="filter_btn" onClick={() => filterParents(title)}>
						{title}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
