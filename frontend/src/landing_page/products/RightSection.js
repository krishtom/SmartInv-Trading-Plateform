import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row ">
        <div className="col-6 mt-5 pt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>

        <div className="col-6">
          <img src={imageUrl} alt="err" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
