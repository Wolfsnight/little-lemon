

// IMPORT: Components
import NavBar from "@/components/common/Nav/NavBar.jsx";
import OpeningHours from "@/components/common/Opens/OpeningHours.jsx";
import SocialLinks from "@/components/common/SocialLinks/SocialLinks.jsx";


const Footer = () => {
	return (
		<footer className="footer">
			<OpeningHours />
			<NavBar />
			<SocialLinks />
		</footer >
	)
}

export default Footer
