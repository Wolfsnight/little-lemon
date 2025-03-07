// Import Font Awesome:
import "./fontAwesomeSetup";

import {Routes, Route} from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./components/pages/Home/Home.jsx";

const About = () => <h1 >ℹ️ The About Site is not available</h1 >;
const Menu = () => <h1 >ℹ️ The Menu Site is not available</h1 >;
const Reservation = () => <h1 >ℹ️ The Reservation Site is not available</h1 >;
const Order = () => <h1 >ℹ️ The Order Site is not available</h1 >;
const Login = () => <h1 >ℹ️ The Login Site is not available</h1 >;

function App() {
	return (
		<>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes >
      <Footer />
    </>
	);
}

export default App;
