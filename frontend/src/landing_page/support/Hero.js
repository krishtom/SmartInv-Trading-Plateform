import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a className="text-decoration-none" href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="d-flex  gap-2">
            <a className="text-decoration-none" href="">Track account opening</a>
            <a className="text-decoration-none" href="">Track segment activation</a>
            <a className="text-decoration-none" href="">Intraday margins</a>
            <a className="text-decoration-none" href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3 px-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a className="text-decoration-none" href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a className="text-decoration-none" href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;