import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from '@/styles/Slider.module.css'
import cafe1 from '../../../../public/cafe1.jpg'
import cafe2 from '../../../../public/cafe2.jpg'
import cafe3 from '../../../../public/cafe3.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <>
      <Swiper loop = 'true' pagination={true} modules={[Pagination]} className={styles.swiper}>
        <SwiperSlide className={styles.swiperSlide}>
            <Image src={cafe1} />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
            <Image src={cafe2} />
        </SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}>
            <Image src={cafe3} />
        </SwiperSlide>

      </Swiper>
    </>
  )
}

export default Slider