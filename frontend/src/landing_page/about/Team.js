import React from "react";

function Team() {
  return (
    <div class="container border-top ">
      <h2 class="text-center p-5 m-5">People</h2>
      <div class="row between ceo-container">
        <div class="col-5 text-center">
          <img
            class="founder-image"
            src="media\image\3dcartoon.webp"
            alt="Alpha, CEO"
            style={{ borderRadius: "50%", width: "60%" }}
          />
          <h5 className="my-4">Alpha</h5>
          <p class="text-muted">Founder, CEO</p>
        </div>
        <div class="col-7 p-5 mr-5 text-muted">
          <p>
            Alpha founded Alpha in 2025 to overcome the hurdles he faced during
            his decade long stint as a trader. Today, Alpha has changed the
            landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SXBI Secondary Market Advisory Committee
            (SSAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on&nbsp;
            <a target="_blank" href="" title="Homepage">
              Homepage
            </a>{" "}
            /
            <a target="_blank" href="" title="TradingQnA">
              {" "}
              TradingQnA
            </a>{" "}
            /
            <a target="_blank" href="">
              {" "}
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
