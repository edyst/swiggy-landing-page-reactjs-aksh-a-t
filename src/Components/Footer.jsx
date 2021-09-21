import React from "react";
import data from "./FooterData";
import "./Footer.css";
import MapFooterData from "./MapFooterData";
import AppBtnComp from "./AppBtnComp";
const Footer = () => {
  const [initialval, setVal] = React.useState(20);
  return (
    <footer className="constant-paddingLeft constant-paddingRigth ">
      <div style={{ paddingTop: "76px" }}>
        <div className="footerUp">
          <div>
            <div className="footHeading">COMPANY</div>
            <ul className="ulStyle">
              <MapFooterData data={data.COMPANY[0]} />
            </ul>
          </div>
          <div>
            <div className="footHeading">CONTACT</div>
            <ul className="ulStyle">
              <MapFooterData data={data.CONTACT[0]} links={data.CONTACT[1]} />
            </ul>
          </div>
          <div>
            <div className="footHeading">LEGAL</div>
            <ul className="ulStyle">
              <MapFooterData data={data.LEGAL} />
            </ul>
          </div>
          <div style={{ width: "220px" }}>
            <div className="footerBtn">
              <AppBtnComp />
            </div>
          </div>
        </div>
        <hr />
        <div style={{ marginTop: "30px" }}>
          <div className="footHeading">WE DELIVER TO</div>
          <ul className="ulStyle footerMid hidden">
            <MapFooterData data={data.DELIVER} />
          </ul>
          <ul
            style={{ gridTemplateRows: `repeat(${initialval / 2},1fr)` }}
            className="ulStyle hidden2"
          >
            <MapFooterData data={data.DELIVER} end={initialval} />
          </ul>
          <button
            className="hidden2btn"
            onClick={() => setVal(initialval + 10)}
          >
            Load More
          </button>
        </div>
        <hr />
        <div className="footerEnd">
          <div>
            <a className="link" href="https://www.swiggy.com">
              <img
                heigth="42px  "
                width="142px"
                alt="img"
                src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
              />
            </a>
          </div>
          <div>© 2021 Swiggy</div>
          <div style={{ gap: "10px", display: "flex" }}>
            <a className="link" href="https://www.facebook.com/swiggy.in">
              <i className="fa fa-facebook"></i>
            </a>
            <a className="link" href="https://pinterest.com/swiggyindia">
              <i className="fa fa-pinterest"></i>
            </a>
            <a className="link" href="https://instagram.com/swiggyindia/">
              <i className="fa fa-instagram"></i>
            </a>
            <a className="link" href="https://twitter.com/swiggy_in">
              <i className="fa fa-twitter"></i>
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
