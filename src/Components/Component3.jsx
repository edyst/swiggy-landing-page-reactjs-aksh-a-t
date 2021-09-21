import React from "react";
import AppBtnComp from "./AppBtnComp";
import "./Component2.css";
const Component3 = () => {
  return (
    <>
      <div className="comp3grid constant-paddingLeft">
        <div>
          <div style={{ lineHeight: "1" }} className="comp3head">
            Restaurants in your pocket
          </div>
          <div className="comp3sub">
            Order from your favorite restaurants & track on the go, with the
            all-new Swiggy app.
          </div>
          <div style={{ gap: "15px", display: "flex", flexWrap: "wrap" }}>
            <AppBtnComp />
          </div>
        </div>
        <div className="imgHidden">
          <img
            className="imgsize"
            style={{ marginLeft: "50px", marginRight: "-40px" }}
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
            alt="img2"
          />
          <img
            className="imgsize"
            id="img22"
            style={{ paddingTop: "50px", flexShrink: "1" }}
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
            alt="img3"
          />
        </div>
      </div>
    </>
  );
};

export default Component3;
