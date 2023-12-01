import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";

import { serviceCards } from "../../utils/dataArrays";
import { Card } from "../Card";

export const ServiceCards = () => {
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
     
      easing: easings.easeInSine,
    },
  });



  useEffect(() => {
    const loaderDelay = 500;

    // Simulate loading delay with setTimeout
    setTimeout(() => {
      if (inView) {
        setIsVisible(true);
      }
    }, loaderDelay);
  }, [inView]);


  return (
    <animated.section className="h-auto page-section flex flex-col md:flex-row flex-wrap w-full md:gap-[2%]  items-center pt-[50px] md:pt-[80px] md:pb-[60px] " ref={ref} style={fadeScreen}>
      {serviceCards.map((card, sIndex) => {
        return (
          <>
            <animated.div className="md:w-[48%] mb-[20px]" style={fadeCards}>
              <Card icon={card.icon} title={card.title} des={card.des} />
            </animated.div>
          </>
        );
      })}
    </animated.section>
  );
};
