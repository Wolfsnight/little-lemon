import "./Header.module.css"

import Nav from '../Nav/Nav.jsx';
import NavBar from "@/components/common/Nav/NavBar.jsx";

import logo from '../../../assets/logo01.svg'


const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" width="300"/>
			< NavBar />
		</header>
	)
}

export default Header;
