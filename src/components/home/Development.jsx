import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

export const Development = () => {
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
      duration: 500,
      delay: prevDelay,
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
      className="page-section h-auto flex flex-col mt-[50px] md:mt-[100px] pb-[40px] md:pb-[40px] gap-5"
      style={fadeScreen}
      ref={ref}
    >
      <animated.div
        className=" font-SatoshiMedium text-[33px] leading-[49px] md:text-[64px] md:leading-[87px]  "
        style={fadeContent}
      >
        <span className=" text-[#F4A624]">Revolutionary</span> <br />
        Product Development
      </animated.div>
      <animated.div
        className=" md:w-[50%] font-SatoshiMedium text-[18px] leading-[30px] tracking-[0.6px] text-[#00000080]"
        style={fadeContent}
      >
        Creating ready-to-launch tools, applications, and scalable Minimum
        Viable Products (MVPs) utilizing cutting-edge web3.0 technologies.
      </animated.div>
    </animated.section>
  );
};
