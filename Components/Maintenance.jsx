import { faScrewdriverWrench, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Maintenance() {
  return (
    <>
      <main id='maintenance'>
        <div className='col-12 d-flex flex-wrap justify-content-center maintenance-img '>
          <img src='./assets/2.png' />
          <div className='contactus d-flex flex-wrap col-12 justify-content-center'>

            <h1>You can contact us via </h1>

          </div>
          <div className='social-links d-flex flex-wrap col-12 justify-content-center gap-3'>
            <Link to={"https://www.facebook.com/"} style={{ color: "white", textDecoration: "none" }}>Facebook</Link>
            <Link to={"https://www.linkedin.com/feed/"} style={{ color: "white", textDecoration: "none" }}>linkedin</Link>
            <Link to={"https://www.instagram.com/"} style={{ color: "white", textDecoration: "none" }}>Instagram</Link>

          </div>
            <p>Househunt@gmail.com </p>
         
        </div>
      </main>
    </>
  )
}
