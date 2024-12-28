import { Link } from "react-router-dom";
import 'animate.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



export default function Nav() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
    console.log(!theme);
  }
  useEffect(() => {
    document.body.className = theme ? 'light-mode' : 'dark-mode';
    const footer = document.querySelector('footer');
    if (Nav) Nav.className = theme ? 'light-mode' : 'dark-mode';
    if (footer) footer.className = theme ? 'light-mode' : 'dark-mode';
  }, [theme]);


  return (
    <>
      <nav className='col-12 top-0 position-sticky d-flex'>
        <div id='logo' className="col-2 ">
          <Link to={"/"}>
            <h1>HouseHunt</h1>
          </Link>
        </div>


        <div id="cats" className="btn col-6 d-flex gap-3 justify-content-between align-content-center">
          <Link to="/">
            <button className="btn " id='buy'>Home</button>
          </Link>
          <Link to="/AboutUs">
            <button className="btn" id='rent'>About Us</button>
          </Link>
          <Link to="/Properties">
            <button className="btn" id='properties'>Properties</button>
          </Link>

          <button id="mode" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faCircleHalfStroke} size="xl" className={theme ? 'light-mode' : 'dark-mode'} />
          </button>
          <Link to={"/Login"}>
          <button className="login-btn btn">Login</button>
          </Link>
        </div>



      </nav>
    </>
  );
}