import React from 'react';
import './OurInstructor.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "./styles.css";

const OurInstructor = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-md-5">
                    <h4 className='instructor-title'>These Are Our Instructor</h4>
                    <p className='instructor-paragraph'>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
                        <br />
                        <br />
                        Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Mauris blandit aliquet elit, egettincidunt nibh pulvinar ultricies ligula sed magna dictum porta.</p>
                    <br />
                    <button className='instructor-btn'>Instructor</button>
                </div>
                <div className="col-12 col-md-7 ">
                    <div className='instrctor-group'>
                        <Swiper watchSlidesProgress={true}
                            slidesPerView={3}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            className="mySwiper">
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-4.jpg" alt="" />
                                <h3 className='instructor-name'>Jesse Joplin</h3>
                                <p className='instructor-designation'>Content Strategist</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-1.jpg" alt="" />
                                <h3 className='instructor-name'>Lance Altman</h3>
                                <p className='instructor-designation'>Full Stack Developer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                <h3 className='instructor-name'>Sally Welch</h3>
                                <p className='instructor-designation'>Art Director</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-3.jpg" alt="" />
                                <h3 className='instructor-name'>Willie Mcdonald</h3>
                                <p className='instructor-designation'>Photographer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-4.jpg" alt="" />
                                <h3 className='instructor-name'>Jesse Joplin</h3>
                                <p className='instructor-designation'>Content Strategist</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-1.jpg" alt="" />
                                <h3 className='instructor-name'>Lance Altman</h3>
                                <p className='instructor-designation'>Full Stack Developer</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://i.ibb.co/GPnwYZ8/instructors-2.jpg" alt="" />
                                <h3 className='instructor-name'>Sally Welch</h3>
                                <p>Art Director</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='instructor-img' src="https://edon-ng.envytheme.com/assets/images/instructors/instructors-3.jpg" alt="" />
                                <h3 className='instructor-name'>Willie Mcdonald</h3>
                                <p className='instructor-designation'>Photographer</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurInstructor;