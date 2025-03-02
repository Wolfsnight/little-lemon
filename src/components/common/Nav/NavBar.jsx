import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar.module.css";
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
		<nav className={styles.navbar}>

      <button className={styles.hamburger} onClick={toggleMenu}>
	      MENU
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button >

      <ul className={isMenuOpen ? styles.openMenu : styles.hideMenu}>
	      <li >
		      <Link to="/" onClick={closeMenu}>
			      Home
					</Link >
				</li >
				<li >
					<Link to="/about" onClick={closeMenu}>
						About
					</Link >
				</li >
				<li >
					<Link to="/menu" onClick={closeMenu}>
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
