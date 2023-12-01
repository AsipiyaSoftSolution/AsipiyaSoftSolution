import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export const OurService = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 1000;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 800,

    },
  });


  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-20%)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });
  const fadeRight = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(10%)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeButton = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });

  const fadeCards = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,

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
    <animated.section className="page-section   h-auto  md:pt-[80px] md:pb-[80px] pt-[40px] p-[20px] pb-[40px] flex flex-col md:gap-[2%] justify-center  bg-theme-color" ref={ref} style={fadeScreen}>
      <div className=" w-full flex md:flex-row flex-col justify-between md:gap-[2%] gap-[20px] items-start">
        <animated.div className=" md:w-[40%] flex items-center justify-start text-[36px] md:leading-[87px] md:text-[64px] leading-[45px] font-SatoshiMedium " style={fadeLeft}>
          Our Services
        </animated.div>
        <div className="flex flex-col gap-[40px]  md:w-[55%]">
          <animated.div className=" font-poppins md:text-[16px] text-[18px]   leading-[30px] " style={fadeRight}>
            At Asipiya Soft Solutions, we don't just provide software solutions;
            we empower your business to thrive in the digital age. Join us on a
            journey of innovation, efficiency, and success. Let's shape the
            future of your business together.
          </animated.div>
          <Link to='/services' >
            <animated.button className="button-talk w-[200px] rounded-[30px] border-[1px] border-[#1B1B1B] p-[10px] pl-[32px] pr-[32px] md:block hidden  font-SatoshiRegular text-[16px] leading-[30px] text-[#1B1B1B]  " style={fadeButton}>
              Learn More !
            </animated.button>
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-between md:gap-1 gap-[20px] md:mt-[60px] mt-[30px] ">
        <animated.div className="md:w-[23%] flex flex-col gap-2 font-SatoshiMedium text-[#1B1B1B] md:text-[40px] md:leading-[54px] text-[36px] leading-[48px] " style={{ ...fadeCards, delay: prevDelay + 600 }}>
          Web <br /> Development
          <div className="border-t-[1px] border-[#000000] w-[100%] md:w-[100%] " />
        </animated.div>
        <animated.div className="md:w-[23%] flex flex-col gap-2 font-SatoshiMedium text-[#1B1B1B] md:text-[40px] md:leading-[54px] text-[36px] leading-[48px] " style={{ ...fadeCards, delay: prevDelay + 800 }}>
          ERP <br /> Systems
          <div className="border-t-[1px] border-[#000000] w-[100%] md:w-[100%] " />
        </animated.div>
        <animated.div className="md:w-[23%] flex flex-col gap-2 font-SatoshiMedium text-[#1B1B1B] md:text-[40px] md:leading-[54px] text-[36px] leading-[48px] " style={{ ...fadeCards, delay: prevDelay + 1200 }}>
          POS <br /> Systems
          <div className="border-t-[1px] border-[#000000] w-[100%] md:w-[100%] " />
        </animated.div>
        <animated.div className="md:w-[23%] flex flex-col gap-2 font-SatoshiMedium text-[#1B1B1B] md:text-[40px] md:leading-[54px] text-[36px] leading-[48px] " style={{ ...fadeCards, delay: prevDelay + 1400 }}>
          Social Media Marketing
          <div className="border-t-[1px] border-[#000000] w-[100%] md:w-[100%] " />
        </animated.div>
      </div>
    </animated.section>
  );
};
