import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="container px-4 mb-5">
      <div className="row text-center">
        <img
          src="media/image/homeHero2.png"
          alt="Hero Image"
          className="mb-4"
          style={{ width: "92%" }}
        />
        <h1 className="mt-2 fs-3">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5"
          style={{ width: "20%", margin: "0 auto" }}
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Hero;
