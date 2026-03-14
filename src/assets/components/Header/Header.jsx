import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    const movies = this.props.movies;
    return (
      <>
        <ul className="header">
          {movies.map((movie) => {
            return <li key={movie}>{movie}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Header;
