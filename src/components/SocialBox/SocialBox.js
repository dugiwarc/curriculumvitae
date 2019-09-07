import React from "react";

// Graphics
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import instagram from "../../assets/icons/instagram.svg";
import email from "../../assets/icons/email.svg";

// Styles
import "./SocialBox.scss";

const SocialBox = () => {
	return (
		<div className='SocialBox'>
			<img src={github} alt='github' />
			<img src={linkedin} alt='linkedin' />
			<img src={instagram} alt='instagram' />
			<img src={email} alt='email' />
		</div>
	);
};

export default SocialBox;
