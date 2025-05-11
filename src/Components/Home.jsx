import React from 'react';
import image1 from '../assets/pexel-img.jpg';
import image2 from '../assets/pexel-img2.jpg'
import image3 from '../assets/pexel-img3.jpg';
import image4 from '../assets/pexel-img4.jpg';
import image5 from '../assets/pexel-img5.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

 
const Home = () => {
  return (
    <div className="relative w-full h-screen pt-20">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full"
      >
        <SwiperSlide>
          <img src={image1} className="w-full h-screen object-cover" alt="Slide 1" />

        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} className="w-full h-screen object-cover" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} className="w-full h-screen object-cover" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} className="w-full h-screen object-cover" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} className="w-full h-screen object-cover" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>

      <motion.div
        className="absolute bottom-20 w-full text-center text-white z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-yellow-400">A.H Developers & Technician</h1>
        <p className="text-xs sm:text-sm mt-2 text-yellow-300">Please Like, Share & Subscribe</p>
      </motion.div>
    </div>
  );
};

export default Home;