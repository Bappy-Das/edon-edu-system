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
        category: 'Business'
    },
    {
        img: category3,
        category: 'Design'
    },
    {
        img: category4,
        category: 'Development'
    },
    {
        img: category5,
        category: 'Photography'
    }
]

export default function App() {
    return (
        <div className="my-5">
            <Container>
                <div className="my-5 explore-category">
                    <h2>Explore The Categories</h2>
                </div>
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
                                        <img src={categoryimg?.img} className='img-fluid' alt="" srcSet="" />
                                    </div>

                                </div>
                                <h4 className="category-name">{categoryimg?.category}</h4>

                            </SwiperSlide>

                        )
                    }

                </Swiper>
            </Container>
        </div>
    );
}
