import React from "react";
import "./App.css";
import Header from "./assets/components/Header/Header";
import Main from "./assets/components/Main/Main";
import Footer from "./assets/components/Footer/Footer";

class App extends React.Component {
  state = { 
      movie:['Transformers','Wikings','Harry Potter'] 
    };
  render() {
    return (
      <>
        <Header movies={this.state.movie} />
        <Main />
        <Footer/>
      </>
    );
  }
};

export default App;
