import React from "react";

function Footer() {
  return (
    <div className="container-fluid border-top bg-light mt-5">
      <div className="row my-5 px-5 ">
        <div className="col px-4">
          <img src="/media/image/NavLogo.png" style={{ width: "100%" }} />
          <p> &copy;2025 - 2026, Alpha Ltd. All rights reserved.</p>
        </div>
        <div className="col footer-link">
          <p>Account</p>
          <a href="">Open demat account</a>
          <br></br>
          <a href="">Minor demat account</a>
          <br></br>
          <a href="">NRI demat account</a>
          <br></br>
          <a href="">Commodity</a>
          <br></br>
          <a href="">Dematerialisation</a>
          <br></br>
          <a href="">Fund transfer</a>
          <br></br>
          <a href="">MTF</a>
          <br></br>
          <a href="">Referral program</a>
          <br></br>
        </div>
        <div className="col footer-link">
          <p>Support</p>
          <a href="">Contact us</a>
          <br></br>
          <a href="">Support portal</a>
          <br></br>
          <a href="">How to file a complaint?</a>
          <br></br>
          <a href="">Status of your complaints</a>
          <br></br>
          <a href="">Bulletin</a>
          <br></br>
          <a href="">Circular</a>
          <br></br>
          <a href="">A-Connect blog</a>
          <br></br>
          <a href="">Downloads</a>
          <br></br>
        </div>
        <div className="col footer-link">
          <p>Company</p>
          <a href="">About</a>
          <br></br>
          <a href="">Philosophy</a>
          <br></br>
          <a href="">Press & media</a>
          <br></br>
          <a href="">Careers</a>
          <br></br>
          <a href="">Alpha Cares (CSR)</a>
          <br></br>
          <a href="">Alpha.tech</a>
          <br></br>
          <a href="">Open source</a>
          <br></br>
        </div>
        <div className="col footer-link">
          <p>Quick links</p>
          <a href="">Upcoming IPOs</a>
          <br></br>
          <a href="">Brokerage charges</a>
          <br></br>
          <a href="">Market holidays</a>
          <br></br>
          <a href="">Economic calendar</a>
          <br></br>
          <a href="">Calculators</a>
          <br></br>
          <a href="">Markets</a>
          <br></br>
          <a href="">Sectors</a>
          <br></br>
        </div>
        <div className="row mt-5 text-muted" style={{ fontSize: "12px" }}>
          <p>
            Alpha Broking Ltd.: Member of NSE, BSE​ &amp;​ MCX – SEBI
            Registration no. : [It is Demo INZXXX31633] CDSL/NSDL: Depository
            services through Alpha Broking Ltd. – SEBI Registration no.: [Again
            it is Demo IN-DP-XXX-2025] Registered Address Demo -: Alpha Broking
            Ltd., South, India. For any complaints pertaining to securities
            broking please write to{" "}
            <a href="mailto:XXX@Alpha.xx">Demo-complaits@Alpha.com</a>, for DP
            related to <a href="mailto:dp@Alpha.xxm">Demo-dp@Alpha.com</a>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a rel="nofollow" href="" target="_blank">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PXN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a rel="nofollow" href="" target="_blank">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="" target="_blank">
              Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a rel="nofollow" href="" target="_blank">
              NSE broker factsheet
            </a>
          </p>

          <div className="container text-center bg-grey text-black py-4 mt-5">
            <p className="mb-1">This is a project only.</p>
            <p className="text-secondary mb-0">Built for learning purposes.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
