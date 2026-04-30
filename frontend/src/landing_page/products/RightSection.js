import React from "react";

export default function RightSection({
  rgTitle,
  prodDesc,
  link1,
  imgURL,
  style,
}) {
  return (
    <div className="container mt-5" style={style}>
      <div className="row align-items-center justify-content-center">
        {/* TEXT SECTION */}
        <div className="col-12 col-md-6 p-4">
          <h1>{rgTitle}</h1>
          <p>{prodDesc}</p>

          <a href="#!" className="text-decoration-none">
            {link1}{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* IMAGE SECTION */}
        <div className="col-12 col-md-6 text-center">
          <img src={imgURL} className="img-fluid" alt={rgTitle} />
        </div>
      </div>
    </div>
  );
}
