import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import vnm from "./../../assets/images/vnm.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export const VNM = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 800;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 1000,
      
    },
  });

  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(20%)",
    config: {
      duration: 1500,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeContent = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 1500,
     
      easing: easings.easeInSine,
    },
  });


  useEffect(() => {
    const loaderDelay = 200;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <animated.section className="page-section h-auto md:pt-[30px] pt-[40px] p-[20px] pb-[40px] flex flex-col md:flex-row md:gap-[2%] justify-center md:items-center  bg-theme-color relative" ref={ref} style={fadeScreen}> 
      <div className="text-[#00000010] font-SatoshiMedium text-[300px] absolute md:top-[3%] md:left-[7%]  ">
        “
      </div>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper md:hidden"
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className=" font-SatoshiMedium text-[36px] leading-[49px] md:text-[64px] md:leading-[96px]">
              Our Vision
            </div>
            <div className=" font-poppins md:text-[20px] text-[16px] leading-[30px] text-center  font-[500] text-[#00000080]">
              Pioneering transformative software solutions for business success
              in a tech-driven future.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className=" font-SatoshiMedium text-[36px] leading-[49px] md:text-[64px] md:leading-[96px]">
              Our Mission
            </div>
            <div className=" font-poppins md:text-[20px] text-[16px] leading-[30px] text-center font-[500] text-[#00000080]">
              Empowering businesses through innovative software solutions,
              seamlessly integrating technology for operational efficiency and
              sustainable success
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="w-[50%] hidden md:flex flex-col items-start justify-start md:pt-[90px]">
        <animated.div className="flex flex-col gap-3" style={fadeContent}>
      
          <div className=" font-SatoshiMedium text-[64px] leading-[96px]">
            Our Vision
          </div>
          <div className=" font-poppins md:text-[20px] text-[16px] leading-[30px] tracking-[0.3px] text-[#00000080]">
            Pioneering transformative software solutions for business success in
            a tech-driven future.
          </div>
        </animated.div>
        <animated.div className="flex flex-col gap-3 mt-[30px]" style={fadeContent}>
          <div className=" font-SatoshiMedium text-[64px] leading-[96px]">
            Our Mission
          </div>
          <div className=" font-poppins md:text-[20px] text-[16px] leading-[30px] tracking-[0.3px] text-[#00000080]">
            Empowering businesses through innovative software solutions,
            seamlessly integrating technology for operational efficiency and
            sustainable success
          </div>
        </animated.div>
      </div>
      <animated.div className=" hidden md:flex md:w-[40%]  w-[100%] md:flex-row gap-[4%] md:mt-[130px] " style={fadeRight}>
        <div className="md:w-[100%] w-[100%] rounded-[18px] b-shadow overflow-hidden">
          <img
            src={vnm}
            className="w-[100%] md:h-[80vh] h-[356px] object-cover"
            alt=""
          />
        </div>
      </animated.div>
    </animated.section>
  );
};
