import React, { useState } from 'react'
import 'animate.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


export default function Home() {


  return (

    <>
      <div className='col-12 d-flex flex-wrap ' id='discover'>
        <div className='left-side col-6 '>
          <div className='paragraph'>
            <p id='title'>Discover Your Dream Property with Estatein</p>

            <p id='little-title'>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          </div>
          <div className='more d-flex gap-2'>
            <button className='btn' id='learn-more'>Learn more</button>
            <Link to={"/Properties"}>
              <button className='btn' id='browse'>Browse Properties</button>
            </Link>
          </div>
          <div id='customers'>
            <div id='happy'>
              <p>200+</p>
              <p>Happy Customers</p>
            </div>
            <div id='clients'>
              <p>10K+</p>
              <p>properties for clients</p>
            </div>
            <div id='years'>
              <p>16+</p>
              <p>years of experiance</p>
            </div>
          </div>
        </div>
        <div className='right-side col-6 '>
          <img src='./assets/Container-remove.png' className='col-12' />
        </div>
        <div className='containers   col-12 '>
          <div id='find' className=' animate__fadeIn' >
            <img src='./assets/house.png' id='house' />
            <p>Find Your Dream Home</p>
          </div>
          <div id='find' className=' animate__fadeIn'>
            <img src='./assets/value.png' id='unlock' />
            <p>Unlock Property Value</p>
          </div>
          <div id='find' className=' animate__fadeIn'>
            <img src='./assets/building.png' id='management' />
            <p>Effortless Property Management</p>
          </div>
          <div id='find' className=' animate__fadeIn'>
            <img src='./assets/smart.png' id='smart' />
            <p>Smart Investments, Informed Decisions</p>
          </div>
        </div>
        <div className='featured-properties d-flex flex-wrap col-12'>
          <div id='prop-title' className='col-7'>
            <p className='title'>Featured Properties</p>

            <p id='content'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          </div>
          <div className='col-12 d-flex ' id='prop-cards'>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className='col-12 d-flex flex-wrap' id='reviews'>
          <div id='rev-title' className='col-9 p-4'>
            <p style={{ fontSize: '48px' }}>What Our Clients Say</p>

            <p style={{ color: '#999999', fontSize: '18px' }}>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
            <div id='rev-cards' className='d-flex  gap-3 '>
              <div className='card1 col-4 animate__fadeIn'>
                <img src='./assets/stars.png' id='stars' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Exceptional Service!</p>

                <p style={{ fontSize: '18px', fontWeight: '500' }}>Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!</p>
                <p>
                  <img src='./assets/profile1.png' id='prof1' /> Wade Warren
                </p>
                <p style={{ color: '#999999' }}>USA, California
                </p>
              </div>
              <div className='card2 col-4 '>
                <img src='./assets/stars.png' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Efficient and Reliable</p>

                <p style={{ fontSize: '18px', fontWeight: '500' }}>Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.</p>

                <p>
                  <img src='./assets/profile2.png' id='prof2' /> Emelie Thomson
                  <p style={{ color: '#999999' }}>USA, Florida</p>
                </p>

              </div>
              <div className='card3 col-4'>
                <img src='./assets/stars.png' />
                <p style={{ fontSize: '24px', fontWeight: "600" }}>Trusted Advisors</p>

                <p style={{ fontSize: '18px', fontWeight: '500' }}>The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!</p>
                <p>
                  <img src='./assets/profile3.png' id='prof3' /> John Mans
                </p>
                <p style={{ color: '#999999' }}>USA, Nevada</p>

              </div>
            </div>
          </div>
        </div>
        <div className='col-12 d-flex flex-wrap' id='questions'>
          <div id='ques-title' className='col-9 p-4'>
            <p style={{ fontSize: '48px' }} >Frequently Asked Questions</p>
            <p style={{ color: '#999999', fontSize: '18px' }} >Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
          </div>
          <div id='ques-cards' className='d-flex col-12 gap-4 p-4 justify-content-between '>
            <div className="card col-4">
              <div className="card-body ">
                <h5 className="card-title">How do I search for properties on Estatein?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
            <div className="card col-4" >
              <div className="card-body">
                <h5 className="card-title">What documents do I need to sell my property through Estatein?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Find out about the necessary documentation for listing your property with us.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
            <div className="card col-4" >
              <div className="card-body">
                <h5 className="card-title">How can I contact an Estatein agent?</h5>
                <p className="card-text" style={{ color: '#999999', fontSize: '18px' }}>Discover the different ways you can get in touch with our experienced agents.</p>
                <button className='btn '>Learn more</button>

              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}
