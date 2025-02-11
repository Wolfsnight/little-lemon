import Nav from './Nav';

import logo from './../assets/logo01.svg'


const Header = () => {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" width="300"/>
			< Nav />
		</header>
	)
}

export default Header;
