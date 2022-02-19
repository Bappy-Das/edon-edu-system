import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import category1 from '../../../photos/categories-1.png'
import category2 from '../../../photos/categories-2.png'
import category3 from '../../../photos/categories-3.png'
import category4 from '../../../photos/categories-4.png'
import category5 from '../../../photos/categories-5.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ExploreCategory.css";

// import required modules
import { Autoplay, Navigation } from "swiper";
import { Container } from "react-bootstrap";


const images = [
    {
        img: category1,
        category: 'Marketing'
    },
    {
        img: category2,
        category: 'Marketing'
    },
    {
        img: category3,
        category: 'Marketing'
    },
    {
        img: category4,
        category: 'Marketing'
    },
    {
        img: category5,
        category: 'Marketing'
    }
]

export default function App() {
    return (
        <>
            <Container>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >


                    {
                        images.map(categoryimg =>

                            <SwiperSlide>
                                <div className="category-div">
                                    <div className="category-img p-3 ">
                                        <img src={categoryimg?.img} className='img-fluid' alt="" srcset="" />
                                    </div>

                                </div>
                                <h4 className="">Development</h4>

                            </SwiperSlide>

                        )
                    }

                </Swiper>
            </Container>
        </>
    );
}
