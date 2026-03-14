import React from "react";
import "./footer.css";

export default function Footer({ footerInfo }) {
  return (
    <div className="footer">
      <div className="address">
        <h3>address</h3>
        <p>{footerInfo[0]}</p>
      </div>
      <div className="email">
        <h3>email</h3>
        <p>{footerInfo[1]}</p>
      </div>
      <div className="phone">
        <h3>phone</h3>
        <p>{footerInfo[2]}</p>
      </div>
    </div>
  );
}
