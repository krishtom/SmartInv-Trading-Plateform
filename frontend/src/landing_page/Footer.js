import React from "react";

function Footer() {
  return (
    <div className="container border-top mt-5 ">
      <div className="row mt-5">
        <div className="col">
          <img src="media/images/logo.svg" style={{ width: "50%" }} alt="err" />
          <p>&copy; SmartInv Broking Ltd. All rights reserved.</p>
        </div>
        <div className="col  ">
          <p>Company</p>
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="/about"
          >
            About
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="/product"
          >
            Products
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="/pricing"
          >
            Pricing
          </a>
          <br />

          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            SmartInv.tech
          </a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>

          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            Contact us{" "}
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            Support portal
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="https://zerodha.com/z-connect/"
          >
            {""}
            Z-Connect blog
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="/pricing"
          >
            {" "}
            List of charges
          </a>
          
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            Videos
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            Market overview
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            How to file a complaint?
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            Status of your complaints
          </a>
        </div>
        <div className="col">
          <p>Account</p>
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href="/signup"
          >
            Open an account
          </a>
          <br />
          <a
            className="text-muted"
            style={{ textDecoration: "none", color: "black" }}
            href=""
          >
            {" "}
            Fund Transfer
          </a>
          <br />
        </div>
      </div>

      <div className="mt-5 text-muted " style={{ fontSize: "14px" }}>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>

        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>

        <p>
          "Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day. Issued in the interest of investors. KYC is one time exercise
          while dealing in securities markets - once KYC is done through a SEBI
          registered intermediary (broker, DP, Mutual Fund etc.), you need not
          undergo the same process again when you approach another
          intermediary." Dear Investor, if you are subscribing to an IPO, there
          is no need to issue a cheque. Please write the Bank account number and
          sign the IPO application form to authorize your bank to make payment
          in case of allotment. In case of non allotment the funds will remain
          in your bank account. As a business we don't give stock tips, and have
          not authorized anyone to trade on behalf of others. If you find anyone
          claiming to be part of SmartInv and offering such services
        </p>
      </div>
    </div>
  );
}

export default Footer;
