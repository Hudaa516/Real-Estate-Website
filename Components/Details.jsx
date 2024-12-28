import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faBolt, faExpand, faLocation, faLocationDot, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



export default function Details() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <main id='details' className='d-flex flex-wrap'>
                <div className='col-12' id='my-swiper'>
                    <div className='col-12 d-flex justify-content-around ' id='property-name'>
                        <h2>Seaside Serenity Villa</h2>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} /> Malibu, California
                        </p>
                        <h6>price : 500,000</h6>

                    </div>

                    <Swiper

                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2">
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="assets/image.png" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='col-12 d-flex  description-key p-3'>
                    <div className='col-6 descripe p-5'>
                        <p style={{ fontSize: "24px" }}>Description</p>
                        <p style={{ color: "#999999", fontSize: "24px" }}>Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</p>
                        <div className='col-12 d-flex description-cards'>
                            <div className='bed-card col-4'>
                                <FontAwesomeIcon icon={faBed} size='xl' className='p-3' style={{ color: "#999999" }} />
                                <p style={{ color: "#999999" }}>Bedrooms</p>
                            </div>
                            <div className='bath-card col-4'>
                                <FontAwesomeIcon icon={faBath} size='xl' className='p-3' style={{ color: "#999999" }} />
                                <p style={{ color: "#999999" }}>Bathrooms</p>
                            </div>
                            <div className='area-card col-4'>
                                <FontAwesomeIcon icon={faExpand} size='xl' className='p-3' style={{ color: "#999999" }} />
                                <p style={{ color: "#999999" }}>Area</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-6 keys d-flex flex-wrap p-5'>
                        <p style={{ fontSize: "24px" }}>Key Features and Amenities</p>
                        <div className='col-12 key-cards '>
                            <div className='key'>
                                <p> <FontAwesomeIcon icon={faBolt} /> Expansive oceanfront terrace for outdoor entertaining</p>
                            </div>
                            <div className='key'>
                                <p> <FontAwesomeIcon icon={faBolt} /> Gourmet kitchen with top-of-the-line appliances</p>
                            </div>
                            <div className='key'>
                                <p> <FontAwesomeIcon icon={faBolt} /> Private beach access for morning strolls and sunset views</p>
                            </div>
                            <div className='key'>
                                <p> <FontAwesomeIcon icon={faBolt} /> Master suite with a spa-inspired bathroom and ocean-facing balcony</p>
                            </div>
                            <div className='key'>
                                <p> <FontAwesomeIcon icon={faBolt} /> Private garage and ample storage space</p>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}
