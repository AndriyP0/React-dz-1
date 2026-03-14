import React, { Component } from "react";
import "./main.css";

export default class Main extends Component {
  render() {
    const movie = {
      plot: this.props.plot,
      actors: this.props.actors,
      info: this.props.info,
    };
    return (
      <div className="main">
        <section className="Plot">
          <h3>Plot</h3>
          <p>{movie.plot}</p>
        </section>
        <section className="actors">
          <h3>Actors</h3>
          <p>{movie.actors}</p>
        </section>
        <section className="info">
          <h3>Info</h3>
          <p>{movie.info}</p>
        </section>
      </div>
    );
  }
}
