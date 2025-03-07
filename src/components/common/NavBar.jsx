import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="">
			{/* Burger Button */}
      <
				button
	      className="flex items-center gap-3 text-2xl focus:outline-none lg:hidden"
	      onClick={toggleMenu}
      >
	      MENU
        <FontAwesomeIcon
	        icon={isMenuOpen ? faTimes : faBars}
        />
      </button >

			{/* Menü */}
			<ul
				className={
				`fixed top-24 left-0 w-full h-full flex flex-col justify-center items-center gap-5 bg-white text-3xl 
				lg:visible lg:static lg:flex-row lg:text-lg
				${isMenuOpen ? "visible" : "invisible"}`
			}
			>
				<li >
					<Link
						to="/"
						onClick={closeMenu}
					>
						Home
					</Link >
				</li >
				<li >
					<Link
						to="/about"
						onClick={closeMenu}
					>
						About
					</Link >
				</li >
				<li >
					<Link
						to="/menu"
						onClick={closeMenu}
					>
						Menu
					</Link >
				</li >
				<li >
					<Link to="/reservation" onClick={closeMenu}>
						Reservations
					</Link >
				</li >
				<li >
					<Link to="/order" onClick={closeMenu}>
						Order Online
					</Link >
				</li >
				<li >
					<Link to="/login" onClick={closeMenu}>
						Login
					</Link >
				</li >
			</ul >
		</nav >
	);
};

export default NavBar;
