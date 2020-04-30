import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Intro from './Components/Intro';
import About from './Components/About';
import Treatments from './Components/Treatments';
import dummyText from "./dummyText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <About
          title="About"
          id="about"
        />
        <Treatments
          title="Treatments"
          dark={true}
          id="treatments"
        />
        <Section
          title="Section 3"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <Section
          title="Section 4"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Section 5"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;