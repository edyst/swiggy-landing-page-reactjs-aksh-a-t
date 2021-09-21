import React from "react";

const MapFooterData = ({ data, end, links }) => {
  if (end) {
    data = data.slice(0, end);
  }
  return (
    <>
      {data.map((val, index) => {
        let link;
        if (links) {
          link = links[index];
        } else {
          link = `https://www.swiggy.com/${val.toLowerCase()}`;
        }
        return (
          <li key={index} style={{ paddingTop: "15px" }}>
            <a className="link" href={link}>
              {val}
            </a>
          </li>
        );
      })}
    </>
  );
};

export default MapFooterData;
