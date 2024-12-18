import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          Transforming the future of finance with
          <br />
          innovative technology and a bold vision.
        </h1>
      </div>

      <div className="row p-5 mt-5 border-top text-muted fs-6">
        <div className="col-6 px-5">
          <p>
            We began our journey with a vision to eliminate the barriers that
            often hold back aspiring traders and investors. With a focus on
            affordability, accessibility, and cutting-edge technology, we set
            out to redefine the way people interact with financial markets. Our
            name reflects our mission—SmartInv, inspired by breaking boundaries
            and opening doors to new possibilities.
          </p>

          <p>
            Today, we’re proud to see our innovative approach empowering
            thousands, helping them achieve their goals through intuitive
            platforms and solutions.
          </p>
          <p>
            Whether it’s simplifying trading or creating opportunities for
            growth, we are driven to make a lasting impact in the world of
            finance and beyond.
          </p>
        </div>
        <div className="col-6 px-5">
          <p>
            We believe in empowering traders and investors through accessible
            online education and building a strong, collaborative community.
          </p>
          <p>
            Our initiative, SmartInv Labs, supports emerging fintech
            startups, fostering innovation and helping to shape the future of
            financial markets in India.
          </p>
          <p>
            There’s always something exciting happening here—whether it’s a new
            idea, project, or collaboration. Follow our latest updates on our
            blog or see how we’re making headlines in the media.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
