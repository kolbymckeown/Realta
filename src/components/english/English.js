import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import Products from "../Products";
import Contact from "../Contact";
import Banner from "../Banner";
import { useWindowSize } from "../helpers/Window";

function English() {
  const { isMobile } = useWindowSize();

  if (isMobile) {
    return (
      <div>
        <Header />
        <Banner />
        <About />
        <Products />
        <Contact />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Banner />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default English;
