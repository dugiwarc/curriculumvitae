import React from "react";

import "./Header.scss";

const Header = () => {
	return (
		<div className='Header'>
			<div className='left'>
				<h2>Curriculum Vitae</h2>
			</div>
			<div className='right'>
				<div className='pricing'>Pricing</div>
				<div className='resume'>
					<a href='../../downloads/englishResume.pdf' download>
						Get resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
