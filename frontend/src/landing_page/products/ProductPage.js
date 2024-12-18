import React from "react";
import Hero from "./Hero";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";


function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="SmartInv"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore
      />
      <RightSection
        imageUrl="media/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <p className="text-center mt-5 mb-5 " style={{fontSize:"1.5rem" }}>
        Want to know more about our technology stack? Check out the SmartInv
        blog.
      </p>
      <Universe imageUrl />
    </>
  );
}

export default ProductPage;
