import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import rocket from "./../../assets/images/icons/rocket.png";

export const Contact = ({scrollref}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 500;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 800,
    },
  });

  const fadeContent = useSpring({
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
    <animated.section
      className="h-auto md:pl-[60px] md:pr-[60px]  flex flex-col  items-center pt-[50px] md:pt-[80px] md:pb-[60px] pb-[40px]"
      ref={ref}
      style={fadeScreen}
    >  <div ref={scrollref} />
      <animated.div className="w-full felx flex-col " style={fadeContent}>
        <div className=" text-center md:pr-[0] md:pl-[0] pr-[20px] pl-[20px] font-SatoshiBold text-[36px] leading-[49px] md:text-[48px] md:leading-[65px] ">
          Contact Us
        </div>
        <div className=" text-center md:pr-[0] md:pl-[0] pr-[20px] pl-[20px] font-SatoshiRegular text-[18px] leading-[25px] md:text-[16px] md:leading-[30px] tracking-[0.6px] ">
          Welcome to Asipiya! For inquiries, reach out to us at{" "}
          <a href="mailto:info@asipiya.lk" className=" underline">
            info@asipiya.lk
          </a>
        </div>

        <div className=" w-full bg-[#F5F5F5] md:rounded-[44px] p-[20px]  md:p-[40px] flex flex-col md:flex-row md:justify-between mt-[30px]">
          <div className="hidden md:block md:w-[40%] md:pl-[40px] md:pt-[40px] font-SatoshiBold md:text-[48px] md:leading-[65px] text-[30px] leading-[41px] text-center md:text-start ">
            Let’s discuss <br /> on something <br />{" "}
            <span className=" text-[#F0BB1F]">cool</span> together
          </div>
          <div className="flex flex-col rounded-[24px] justify-between md:items-start items-center md:gap-[150px] gap-[50px] bg-white md:w-[58%] p-[20px] md:p-[30px]">
            <div className="md:hidden md:w-[40%] md:pl-[40px] md:pt-[40px] pb-[30px] font-SatoshiBold md:text-[48px] md:leading-[65px] text-[30px] leading-[41px] text-center md:text-start ">
              Let’s discuss <br /> on something{" "}
              <br className="hidden md:block" />{" "}
              <span className=" text-[#F0BB1F]">cool</span> together
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-[#2E0249] font-SatoshiMedium md:text-[20px] md:leading-[27px] text-[16px] leading-[20px]">
                I’m interested in...
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="cat-btn md:min-w-[31%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  UI/UX Design
                </button>
                <button className="cat-btn  md:min-w-[32%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  Web Design
                </button>
                <button className="cat-btn  md:min-w-[32%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  POS Systems
                </button>
                <button className="cat-btn  md:min-w-[32%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  Design System
                </button>
                <button className="cat-btn  md:min-w-[32%] border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  Customize Software Solution
                </button>
                <button className="cat-btn border-[1px] rounded-[8px] p-[8px] pl-[16px] pr-[16px] font-SatoshiMedium text-[14px] leading-[22px] text-center  ">
                  Other
                </button>
              </div>
              <div className="flex flex-col gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="border p-2 font-SatoshiMedium text-[16px] contact-input"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="border p-2 font-SatoshiMedium text-[16px] contact-input"
                />
                <input
                  type="text"
                  placeholder="Your Message"
                  className="border p-2 font-SatoshiMedium text-[16px] contact-input"
                />
              </div>
            </div>
            <button className="border-[1px] contact-button md:w-[290px] w-[220px]  text-[#EEEEEE] flex justify-center gap-2 rounded-[16px]  md:p-[24px] p-[16px] md:pl-[64px] md:pr-[64px] font-poppins text-[16px] leading-[24px] text-center bg-black  ">
              <img src={rocket} className=" md:w-[24px] w-[17px]" alt="" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </animated.div>
    </animated.section>
  );
};
