import React from 'react'
import { FiInstagram } from "react-icons/fi";
import { IconContext } from 'react-icons';

const SocialMediaIcons = () => {
	return (
		<div>
			<h4>Follow us on Instagram:</h4>
			<a className="smIcon__link" href="https://instagram.com/charbelsydney">
				<IconContext.Provider value={{ className: 'smIcon__icon' }}>
					<FiInstagram />
				</IconContext.Provider>
			</a>
		</div>
	)
}

export default SocialMediaIcons
