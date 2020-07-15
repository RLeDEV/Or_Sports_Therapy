import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Intro from './Components/Intro';
import About from './Components/About';
import Treatments from './Components/Treatments';
import Trainings from './Components/Trainings';
import Gallery from './Components/Gallery';
import Video from './Components/Video';
import Contact from './Components/Contact';

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
          dark={true}
          id="gallery"
        />
        <Contact
          title="Contact"
          dark={false}
          id="contact"
        />
      </div>
    );
  }
}

export default App;