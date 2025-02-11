import {BrowserRouter as Routes, Route} from "react-router-dom";

import './App.css'

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer'

const About = () => <h1 >ℹ️ The About Site is not available</h1 >;
const Menu = () => <h1 >ℹ️ The Menu Site is not available</h1 >;
const Reservation = () => <h1 >ℹ️ The Reservation Site is not available</h1 >;
const Order = () => <h1 >ℹ️ The Order Site is not available</h1 >;
const Login = () => <h1 >ℹ️ The Login Site is not available</h1 >;

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
