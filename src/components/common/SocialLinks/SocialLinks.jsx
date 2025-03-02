// IMPORT: Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// IMPORT: CSS-Style
import styles from "./SocialLinks.module.css";

const socialLinks = [
	{
		name: "Facebook",
		url: "https://facebook.com/littlelemon",
		icon: ["fab", "facebook-f"]
	},
	{
		name: "Instagram",
		url: "https://instagram.com/littlelemon",
		icon: ["fab", "instagram"]
	},
	{
		name: "Twitter",
		url: "https://twitter.com/littlelemon",
		icon: ["fab", "twitter"]
	},
	{
		name: "YouTube",
		url: "https://youtube.com/littlelemon",
		icon: ["fab", "youtube"]
	},
	{
		name: "Phone",
		url: "tel:+1234567890",
		icon: ["fas", "phone"]
	},
];

const SocialLinks = () => {
	return (
		<nav className={styles.socialLinks}>
      <h2 >Follow Us</h2 >

        {socialLinks.map((link, index) => (

					<div key={index}>
		        <a
			        href={link.url}
			        target="_blank"
			        rel="noopener noreferrer"
		        >
			        <p >{link.name}</p >
	            <FontAwesomeIcon icon={link.icon} />
						</a >


					</div >
        ))}
		</nav >
	);
};

export default SocialLinks;
