import NavBar from "@/components/common/NavBar.jsx";
import logo from "@/assets/logo01.svg";

const Header = () => {
	return (
		<header
			className="sticky top-0 left-0 z-10 w-full h-24 bg-white flex flex-row
			justify-between items-center border-b-2 p-4 lg:px-16"
		>
			<img
				src={logo}
				className="h-16"
				alt="logo"/>
			< NavBar />
		</header>
	)
}

export default Header;
