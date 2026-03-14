import React from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";

class App extends React.Component {
  state = {
    movie: ["Transformers", "Wikings", "Harry Potter"],
    plot: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            nulla cumque sapiente quae praesentium amet. Sed sit reprehenderit
            numquam aliquam aspernatur aut, temporibus in rem labore iure,
            quisquam nobis adipisci.`,
    actors: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officiis.`,
    info: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            architecto, officiis repudiandae id doloremque voluptatem nostrum
            tempora minus temporibus beatae.`,
    footerInfo: ["Lorem, ipsum dolor.", "andriy@gmail,com", "099999923"],
  };
  render() {
    return (
      <>
        <Header movies={this.state.movie} />
        <Main
          plot={this.state.plot}
          actors={this.state.actors}
          info={this.state.info}
        />
        <Footer footerInfo={this.state.footerInfo} />
      </>
    );
  }
}

export default App;
