import React from "react";
import HeaderFrench from "../HeaderFrench";
import Footer from "../Footer";
import AboutFrench from "../AboutFrench";
import ProductsFrench from "../ProfuctsFrench";
import ContactFrench from "../ContactFrench";
import BannerFrench from "../BannerFrench";
import { useWindowSize } from "../helpers/Window";

function French() {
  const { isMobile } = useWindowSize();

  if (isMobile) {
    return (
      <div>
        <HeaderFrench />
        <BannerFrench />
        <AboutFrench />
        <ProductsFrench />
        <ContactFrench />
      </div>
    );
  }
  return (
    <div>
      <HeaderFrench />
      <BannerFrench />
      <AboutFrench />
      <ProductsFrench />
      <ContactFrench />
      <Footer />
    </div>
  );
}

export default French;
