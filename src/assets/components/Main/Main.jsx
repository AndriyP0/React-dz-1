import React, { Component } from "react";
import "./main.css"

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <section className="Plot">
          <h3>Plot</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nulla cumque sapiente quae praesentium amet. Sed sit reprehenderit
            numquam aliquam aspernatur aut, temporibus in rem labore iure,
            quisquam nobis adipisci.
          </p>
        </section>
        <section className="actors">
          <h3>Actors</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officiis.
          </p>
        </section>
        <section className="info">
          <h3>Info</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            architecto, officiis repudiandae id doloremque voluptatem nostrum
            tempora minus temporibus beatae.
          </p>
        </section>
      </div>
    );
  }
}
