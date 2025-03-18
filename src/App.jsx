<<<<<<< HEAD
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
=======
import {useReducer} from "react";
import {Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import {initializeTimes, updateTimes} from "@/utils/availableTimes";

// Import Font Awesome:
import "./fontAwesomeSetup";

import Header from "@/common/Header.jsx";
import Footer from "@/common/Footer.jsx";
import Home from "@/pages/Home/Home.jsx";
import About from "@/pages/About/About.jsx";
import Menu from "@/pages/Menu/Menu.jsx";
import Order from "@/pages/Order/Order.jsx";
import Login from "@/pages/Login/Login.jsx";
import BookingPage from "@/pages/Reservations/BookingPage.jsx";
import ConfirmedBooking from "./pages/Reservations/ConfirmedBooking";

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const navigate = useNavigate();

  function submitForm(formData) {
    if (window.submitAPI(formData)) {
      navigate("/confirmed"); // ✅ Navigiere zur Bestätigungsseite
    } else {
      alert("Fehler: Buchung konnte nicht bestätigt werden.");
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/menu"
          element={<Menu />}
        />
        <Route
          path="/reservation"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/order"
          element={<Order />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
      <Footer />
    </>
  );
>>>>>>> a529697 (Initial commit mit nur little-lemon)
}

export default App;
