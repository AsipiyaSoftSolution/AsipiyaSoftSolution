import React, { useState, useEffect, useRef, useContext } from "react";
import { Header } from "../components/layouts/Header";
import { Hero } from "../components/home/Hero";
import { AboutUs } from "../components/home/AboutUs";
import { OurService } from "../components/home/OurService";
import { Choose } from "../components/home/Choose";
import { Process } from "../components/home/Process";
import { VNM } from "../components/home/VNM";
import { Development } from "../components/home/Development";
import { Partners } from "../components/home/Partners";
import { Contact } from "../components/home/Contact";
import { Footer } from "../components/layouts/Footer";
import { Arrow } from "../components/layouts/Arrow";
import { Loader } from "../components/layouts/Loader";
import NavigationContext from "../contexts/NavigationContext";

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating a 2-second delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, []);


  const scrollRefs = useContext(NavigationContext)

  const handleScrollToSections = (scrollRefs) => {
    if (scrollRefs.current) {
      scrollRefs.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Arrow />
          <Header scrollRefs={scrollRefs}
            handleScrollToSections={handleScrollToSections} />
          <Hero  scrollRefs={scrollRefs}     handleScrollToSections={handleScrollToSections}
            />
          <AboutUs scrollref={scrollRefs.aboutUs} />
          <OurService />
          <Choose scrollref={scrollRefs.whyUs} />
          <Process />
          <VNM />
          <Development />
          <Partners />
          <Contact scrollref={scrollRefs.contact} />
          <Footer scrollRefs={scrollRefs}
            handleScrollToSections={handleScrollToSections} />

        </>
      )}
    </>
  );
};
