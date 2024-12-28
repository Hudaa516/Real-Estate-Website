import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Nav from "./Components/Nav.jsx";
import Home from './Components/Home.jsx';
import Footer from "./Components/Footer.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import Properties from "./Components/Properties.jsx";
import Details from "./Components/Details.jsx";
import Maintenance from "./Components/Maintenance.jsx";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
export default function App() {


  return (

    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="properties" element={<Properties />} />
        <Route path="details" element={<Details />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>










  )
}
