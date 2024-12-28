import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowTurnUp, faCircleArrowUp, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const BackToTopButton = () => {
        const handleClick = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        return (
            <button id='totop' onClick={handleClick} style={{ display: showButton ? 'block' : 'none' }}>
                <FontAwesomeIcon icon={faCircleArrowUp} size='2xl' />            </button>
        );
    };
    return (
        <>
            <footer>

                <div className='col-12' id='footer-logo'>

                    <h1>HouseHunt</h1>
                </div>

                <div className='col-12 d-flex justify-content-around ' id='upper_footer'>
                    <div className='col-4 d-flex flex-wrap' id='footer-info'>
                        <ul>
                            <li>
                                <p><FontAwesomeIcon icon={faLocationDot} /> Address: Cairo,Egypt.</p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faEnvelope} /> Househunt@gmail.com </p>
                            </li>
                            <li>
                                <p><FontAwesomeIcon icon={faPhone} /> 01234567890</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-4' id='about'>
                        <Link to={"/AboutUs"}>

                            <p>About us</p>
                        </Link>
                        <p>Careers</p>

                    </div>
                    <div className='col-4 d-flex gap-3' id='footer-social'>
                        <a href='https://www.facebook.com/' id='facebook' target='_blank'>
                            <FontAwesomeIcon icon={faFacebook} size='2xl' />
                        </a>
                        <a href='https://www.instagram.com/' id='insta' target='_blank'>
                            <FontAwesomeIcon icon={faInstagram} size='2xl' />
                        </a>
                        <a href='https://www.linkedin.com/feed/' id='linkedin' target='_blank'>
                            <FontAwesomeIcon icon={faLinkedin} size='2xl' />
                        </a>
                    </div>

                </div>

                <hr />
                <div className=" d-flex col-12 " id='down_footer'>
                    <div id='links' className="col-4 d-flex justify-content-around  ">

                        <a href="#">Terms & Conditions</a>
                        <p>|</p>
                        <a href="#">Privacy Policy</a>
                        <p>|</p>
                        <a href="#">Cookies Policy</a>

                    </div>



                </div>
                <div className='top' style={{ background: 'none' }}>

                    <BackToTopButton />
                </div>
            </footer >
        </>
    )
}
