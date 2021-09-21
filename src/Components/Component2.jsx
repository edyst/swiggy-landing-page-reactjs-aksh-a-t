import React from "react";
import "./Component2.css";
import SubComponent2 from "./SubComponent2";
const Component2 = () => {
  return (
    <>
      <div className="com2back constant-paddingLeft constant-paddingRigth ">
        <SubComponent2
          imgSrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
          heading="No Minimum Order"
          content="Order in for yourself or for the group, with no restrictions on order value"
          hei="199"
          wid="105"
          padd="5px "
        />
        <SubComponent2
          imgSrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
          heading="Live Order Tracking"
          content="Know where your order is at all times, from the restaurant to your doorstep"
          hei="206"
          wid="112"
        />
        <SubComponent2
          imgSrc="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
          heading="Lightning-Fast Delivery"
          content="Experience Swiggy's superfast delivery for food delivered fresh & on time"
          hei="188"
          wid="124"
          padd="20px"
        />
      </div>
    </>
  );
};

export default Component2;
