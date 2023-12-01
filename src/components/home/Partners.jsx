import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { parnters } from '../../utils/parntersArray';

export const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 200;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 400,
    },
  });





  useEffect(() => {
    const loaderDelay = 100;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);
  return (
    <animated.section className="page-section md:pt-[50px] md:pb-[50px] pt-[30px] pb-[30px] h-auto flex flex-col partner-sec" style={fadeScreen} ref={ref}>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={true}
        // centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 9,
          },
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper partner-slide flex justify-center items-center"
      >
        {parnters.slice(0, 14).map((item, itemIndex) => {
          return (
            <SwiperSlide key={itemIndex} className='flex items-center justify-center'>

              <img src={item.img} className='md:w-[60px] w-[45px]' />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={4}
        loop={true}
        autoplay={true}
        // centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 9,
          },
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper partner-slide"
      >
        {parnters.slice(15, 29).map((item, itemIndex) => {
          return (
            <SwiperSlide key={itemIndex} className='flex items-center justify-center'>


              <img src={item.img} className='md:w-[60px] w-[45px]' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </animated.section>
  )
}
