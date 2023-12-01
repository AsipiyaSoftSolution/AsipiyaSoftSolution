import React, { useState, useEffect, useContext } from "react";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { HeroService } from "../components/services/HeroService";
import { Contact } from "../components/home/Contact";
import { ServiceCards } from "../components/services/ServiceCards";
import { Loader } from "../components/layouts/Loader";
import { Arrow } from "../components/layouts/Arrow";
import NavigationContext from "../contexts/NavigationContext";

export const Service = () => {
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
          <HeroService />
          <ServiceCards />
          <Contact />
          <Footer scrollRefs={scrollRefs}
            handleScrollToSections={handleScrollToSections} />
        </>
      )}
    </>
  );
};
