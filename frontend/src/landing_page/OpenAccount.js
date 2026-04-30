import React from "react";

import { useNavigate } from "react-router-dom";

function OpenAccount() {
  const navigate = useNavigate();
  return (
    <div className="row text-center my-5">
      <h1 className="fs-2">Open a Alpha account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <button
        className="p-2 btn btn-primary fs-5"
        style={{ width: "20%", margin: "0 auto" }}
        onClick={() => navigate("/signup")}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default OpenAccount;
