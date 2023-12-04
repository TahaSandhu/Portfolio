import React from 'react';
import './Portfolio.css';
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommers from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png'

const Portfolio = () => {
  return (
    <div className="portfolio">
        {/* Heading section */}

        <span>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider Portion */}

        <Swiper 
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommers} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio