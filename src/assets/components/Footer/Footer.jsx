import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    const footerInfo = this.props.footerInfo;
    return (
      <>
        <ul className="footer">
          {footerInfo.map((inffo) => {
            return <li key={inffo}>{inffo}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Footer;
