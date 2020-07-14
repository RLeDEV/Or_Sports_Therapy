import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Intro from './Components/Intro';
import About from './Components/About';
import Treatments from './Components/Treatments';
import Trainings from './Components/Trainings';
import Gallery from './Components/Gallery';
import Video from './Components/Video';
import dummyText from "./dummyText";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Intro />
        <Video 
          title="Video"
          dark={false}
          id="video"
        />
        <About
          title="About"
          id="about"
        />
        <Treatments
          title="Treatments"
          dark={true}
          id="treatments"
        />
        <Trainings
          title="Trainings"
          dark={false}
          id="trainings"
        />
        <Gallery
          title="Gallery"
          subtitle={dummyText}
          dark={true}
          id="gallery"
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