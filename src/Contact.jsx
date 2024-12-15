import React from 'react'

import { FaFacebookMessenger } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


import ReactTypingEffect from "react-typing-effect";

import { FaPhoneVolume } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Import autoplay CSS
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module

const Contact = () => {
  return (

    <Swiper
    modules={[Pagination, Autoplay]}
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-slide settings
    spaceBetween={10}
    slidesPerView={1}
    style={{ width: '80%', margin: 'auto' }}
>


    <SwiperSlide>
    <div className=' rounded-xl h-[110px] mb-5 md:w-[400px] items-center mx-auto bg-gradient-to-b from-yellow-900 to-black'>

<div className=' w-full mt-2 mx-auto'> 
  <div className=' text-2xl text-yellow-600 text-center  mx-2 w-full'>
    
  2D ကို 90Z နဲ့ အလျော်စားမှန်မှန်ကန်ကန် <br />  ကစားချင်ရင် 

  </div>
  <div className='flex gap-3 justify-center items-center align-middle mt-2'>
    <a href="https://t.me/minkhaungnawyathar" target='_blank'>
  <FaTelegram className=' hover:text-yellow-400 text-3xl text-yellow-600  ' />

    </a>
    <a href="viber://chat?number=+959955515793" target='_blank'>
  <FaViber className=' hover:text-yellow-400 text-3xl text-yellow-600 ' />

    </a>
    <a href="tel:+1234567890" target='_blank'>

  <FaPhoneVolume className=' hover:text-yellow-400 text-3xl text-yellow-600 '/>

    </a>




  </div>

<div>

</div>

</div>



</div>
    </SwiperSlide>
    {/* <SwiperSlide>
    <div className=' rounded-xl h-20 mb-5 md:w-[400px] items-center mx-auto bg-gradient-to-b from-yellow-600 to-black'>

card 2


</div>
    </SwiperSlide> */}



    </Swiper>


   
  )
}

export default Contact
