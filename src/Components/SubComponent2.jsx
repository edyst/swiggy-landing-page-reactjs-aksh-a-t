import React from "react";

const SubComponent2 = ({ imgSrc, heading, content, hei, wid, padd }) => {
  return (
    <div style={{ width: "322px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: padd,
        }}
      >
        <img width={wid} height={hei} src={imgSrc} alt="img1" />
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              marginTop: "50px",
              marginBottom: "0px",
            }}
          >
            {heading}
          </p>
          <p style={{ color: "#e0cbc1", fontSize: "15px" }}>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default SubComponent2;
