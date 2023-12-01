import React, { useEffect, useState } from "react";
import { useSpring, animated, easings } from "react-spring";
import { useInView } from "react-intersection-observer";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import choose from "./../../assets/images/choose.jpg";
import icon from "./../../assets/images/icons/priority.png";
import iconActive from "./../../assets/images/icons/priorityA.png";

import { chooses } from "../../utils/dataArrays";

export const Choose = ({ scrollref}) => {
 

  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);


  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const prevDelay = 1000;

  const fadeScreen = useSpring({
    opacity: isVisible ? 1 : 0,

    config: {
      duration: 1000,
    },
  });

  const fadeLeft = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0)" : "translateX(-20%)",
    config: {
      duration: 1500,
      delay: 200,
      easing: easings.easeInSine,
    },
  });

  const fadeContent = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(25px)",
    config: {
      duration: 1500,
      delay: 4000,
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
      className="page-section mt-[40px] h-auto md:pt-[10px] pt-[20px] p-[20px] flex flex-col md:gap-[2%] justify-center"
      style={fadeScreen}
      ref={ref}
    > <div ref={scrollref}/>
      <animated.div
        className=" w-full text-center md:text-start font-SatoshiMedium md:text-[64px] md:leading-[87px] text-[36px] leading-[49px] "
        style={fadeLeft}
      >
        Why Choose us ?
      </animated.div>
      <animated.div
        className="w-full flex flex-col md:gap-1 gap-[40px] md:flex-row justify-between md:items-start pt-[40px]"
        style={fadeContent}
      >
        <div className="md:w-[48%] flex justify-start items-center  ">
          <div className=" md:w-[90%] md:rounded-[42px] rounded-[24px] md:h-[550px] h-[395px] overflow-hidden">
            <img
              src={choose}
              className="w-[100%] h-[100%] object-cover "
              style={{ objectPosition: "50% 0" }}
              alt=""
            />
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col gap-[20px] md:pr-[100px]">
          {chooses.map((choose, cIndex) => {
            let turn = cIndex + 1;
            return (
              <Accordion open={open === turn}>
                <AccordionHeader onClick={() => handleOpen(turn)}>
                  <div className="flex items-center justify-center  gap-3">
                    {open === turn ? (
                      <span className=" flex justify-center items-center">
                        <img
                          src={iconActive}
                          className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"
                          alt=""
                        />
                      </span>

                    ) : (
                      <img
                        src={icon}
                        className="md:w-[30px] md:h-[30px] w-[20px] h-[20px]"

                        style={{ cursor: "pointer" }}
                        alt=""
                      />
                    )}

                    <div
                      className="font-poppins text-[18px] leading-[25px] "

                      style={{ cursor: "pointer" }}
                    >
                      {choose.title}
                    </div>
                  </div>


                </AccordionHeader>
                <AccordionBody>
                  <div className=" font-poppins text-[14px] leading-[25px] tracking-[0.6px] text-start text-[#000000a1]">
                    {choose.des}
                  </div>
                </AccordionBody>
              </Accordion>
            )
          })}


          
        </div>
      </animated.div>
    </animated.section>
  );
};
