import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import design from "./../../assets/images/icons/design.png";
import development from "./../../assets/images/icons/development.png";
import taq from "./../../assets/images/icons/taq.png";

export const Process = () => {
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

  const fadeCards = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 1500,
      delay: 1500,
      easing: easings.easeInSine,
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
    <animated.section
      className=" bg-[#EEEEEE9E] page-section mt-[40px] h-auto md:p-[40px] md:pt-[50px] pt-[60px] p-[20px] flex flex-col md:flex-row md:gap-[5%] justify-center"
      ref={ref}
      style={fadeScreen}
    >
      <div className="flex md:hidden flex-col gap-3 items-center">
        <div className=" font-SatoshiMedium text-[15px] leading-[19px] uppercase tracking-[0.6px]">
          process
        </div>
        <div className=" font-SatoshiMedium text-[36px] leading-[49px] text-center">
          Collaborative <br /> Synergy and <br />{" "}
          <span className="text-[#FDBB4D]">State-of-the-Art </span> <br />{" "}
          Technology
        </div>
      </div>

      <animated.div className="w-[95%] flex flex-col md:flex-row gap-[30px] md:items-start items-center md:w-[25%] md:ml-[20px] md:mt-1 mt-[40px]" style={fadeCards}>
        <img src={design} className=" w-[70px]" alt="" />
        <div className="  flex flex-col md:items-start items-center gap-3">
          <div className=" font-poppins font-[500] text-[18px] leading-[23px] md:text-[18px] md:leading-[23px] text-[#1E1C31] ">
            Design
          </div>
          <div className=" font-poppins md:text-start text-center md:text-[12px] md:leading-[22px] text-[16px] leading-[26px] font-[400] text-[#1E1C3180]">
            Fuse creativity and function to shape ideas into captivating, user-centric design blueprints, laying the groundwork for an exciting development journey.
          </div>
        </div>
        <div className="border-t-[1px] border-[#000000] w-[90%]  md:w-[100%] md:hidden " />
      </animated.div>
      <animated.div className="w-[95%] flex flex-col md:flex-row gap-[30px] md:items-start items-center md:w-[25%] md:ml-[20px] md:mt-1 mt-[40px]" style={fadeCards}>
        <img src={development} className=" w-[70px]" alt="" />
        <div className="  flex flex-col md:items-start items-center gap-3">
          <div className=" font-poppins font-[500] text-[18px] leading-[23px] md:text-[18px] md:leading-[23px] text-[#1E1C31] ">
            Development
          </div>
          <div className=" font-poppins md:text-start text-center md:text-[12px] md:leading-[22px] text-[16px] leading-[26px] font-[400] text-[#1E1C3180]">
            Our skilled developers bring designs to life with cutting-edge tech, crafting scalable, robust products using agile methods and rigorous testing.
          </div>
        </div>
        <div className="border-t-[1px] border-[#000000] w-[90%]  md:w-[100%] md:hidden " />
      </animated.div>
      <animated.div className="w-[95%] flex flex-col md:flex-row gap-[30px] md:items-start items-center md:w-[25%] md:ml-[20px] md:mt-1 mt-[40px]" style={fadeCards}>
        <img src={taq} className=" w-[70px]" alt="" />
        <div className="  flex flex-col md:items-start items-center gap-3">
          <div className=" font-poppins font-[500] text-[18px] leading-[23px] md:text-[18px] md:leading-[23px] text-[#1E1C31] ">
            Testing & QA
          </div>
          <div className=" font-poppins md:text-start text-center md:text-[12px] md:leading-[22px] text-[16px] leading-[26px] font-[400] text-[#1E1C3180]">
            We meticulously test every aspect, from unit tests to user acceptance, ensuring flawless functionality and delivering a product that exceeds expectations.
          </div>
        </div>
        <div className="border-t-[1px] border-[#000000] w-[90%]  md:w-[100%] md:hidden " />
      </animated.div>
    </animated.section>
  );
};
