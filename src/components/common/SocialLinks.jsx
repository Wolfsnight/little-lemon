// IMPORT: Font Awesome
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
		<nav className="flex flex-col">
			<h2 className="text-3xl font-bold text-center pb-4">
				Follow Us
			</h2 >
			<div className="flex justify-around">
				{socialLinks.map((link, index) => (
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col text-2xl"
						key={index}
					>
						<FontAwesomeIcon icon={link.icon} />
						<p className="text-xs pt-2">
							{link.name}
						</p >

					</a >
				))}
			</div >
		</nav >
	);
};

export default SocialLinks;
