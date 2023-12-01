import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import team from "./../../assets/images/team.png";
import eclipse from "./../../assets/images/eclipse.png";

export const AboutUs = ({ scrollref }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 200;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 800,
    },
  });

  const fadeTitle = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay,
      easing: easings.easeInSine,
    },
  });
  const fadeDes = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 800,
      delay: prevDelay + 200,
      easing: easings.easeInSine,
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

  useEffect(() => {
    const loaderDelay = 50;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);

  return (
    <animated.section
      className="page-section md:pb-[60px] pb-[40px] md:mt-[100px] mt-[80px] h-auto flex flex-col md:gap-[2%] md:flex-row relative"
      style={fadeScreen}
      ref={ref}
    >
      <div ref={scrollref} />
      <div className=" hidden md:block absolute -z-10 right-0 bottom-[-45%]">
        <img src={eclipse} className="w-[100%] h-[100%] object-cover " alt="" />
      </div>
      <animated.div className="w-[48%] md:flex justify-start items-center hidden " style={fadeLeft}>
        <div className=" w-[90%] md:h-[550px] lg:h-[100%]">
          <img src={team} className="w-[100%] md:h-[540px] lg:h-[100%] h-[100%] object-cover  " alt="" />
        </div>
      </animated.div>
      <div className="md:w-[50%] w-full flex justify-center items-start flex-col gap-[5px]">
        <animated.div className=" font-poppins md:text-[16px] md:leading-[25px] text-[14px] leading-[24px] font-[500] uppercase text-[#1E1C31] tracking-[0.6px] " style={fadeTitle}>
          about us
        </animated.div>
        <animated.div className=" font-SatoshiMedium text-[36px] leading-[45px] md:text-[64px] md:leading-[80px] text-[#1E1C31] capitalize " style={fadeTitle}>
          Design & Develop <br /> For Better{" "}
          <span className="text-[#F4A624]">Solution</span>
        </animated.div>
        <animated.div className=" font-poppins font-[400] text-[16px] text-[#00000080] leading-[30px] md:tracking-[0.6px] md:pr-[50px] md:mt-[30px] mt-[20px] justify-start " style={fadeDes}>
          Welcome to Asipiya Soft Solutions PVT Ltd, your gateway to
          comprehensive and cutting-edge software solutions tailored for
          businesses of all sizes. At Asipiya Soft Solutions, we pride ourselves
          on being your trusted partner in navigating the digital landscape,
          offering a range of services designed to enhance and streamline your
          business operations.
        </animated.div>
      </div>
    </animated.section>
  );
};
